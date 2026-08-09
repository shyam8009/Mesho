import React, { useEffect, useLayoutEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── CONFIG — repoint here, nowhere else ───────────────────────────────────────
const FRAME_COUNT   = 299;
const SCROLL_LENGTH = '600%';
const FRAME_PATH    = (i: number) =>
  `/frames/fpv-frame-${String(i).padStart(3, '0')}.jpg`;

// ─── Beat breakpoints (0–1 scroll progress) ────────────────────────────────────
// DORMANT  0–13%  | WAKE 13–27%  | RELEASE 27–46%
// LOCK    46–73%  | RESOLVE 73–100%

interface FpvCanvasHeroProps {
  /** Attach your existing heroRef here so GSAP entry animations still work */
  heroRef?: React.RefObject<HTMLDivElement | null>;
  /** Attach your existing statsRef here so stat-item animations still work */
  statsRef?: React.RefObject<HTMLDivElement | null>;
}

export function FpvCanvasHero({ heroRef, statsRef }: FpvCanvasHeroProps) {
  const sectionRef   = useRef<HTMLElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);

  // overlay copy refs
  const textEWRef    = useRef<HTMLParagraphElement>(null);
  const textTitleRef = useRef<HTMLHeadingElement>(null);
  const textSpeedRef = useRef<HTMLDivElement>(null);
  const textSpeedLabelRef = useRef<HTMLDivElement>(null);
  const spec1Ref     = useRef<HTMLDivElement>(null);
  const spec2Ref     = useRef<HTMLDivElement>(null);
  const spec3Ref     = useRef<HTMLDivElement>(null);
  const ctaRef       = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const canvas  = canvasRef.current!;
    const section = sectionRef.current!;
    const ctx     = canvas.getContext('2d', { alpha: false })!;

    const images: HTMLImageElement[] = [];
    let target  = 1;
    let current = 1;
    let lastDrawn = -1;
    let rafId: number;

    // ── Canvas resize ──────────────────────────────────────────────────────────
    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width  = section.clientWidth  * dpr;
      canvas.height = section.clientHeight * dpr;
      canvas.style.width  = `${section.clientWidth}px`;
      canvas.style.height = `${section.clientHeight}px`;
      ctx.resetTransform();
      ctx.scale(dpr, dpr);
      lastDrawn = -1;
      draw(Math.max(1, Math.min(FRAME_COUNT, Math.round(current))));
    }

    // ── Cover-fit draw ─────────────────────────────────────────────────────────
    function draw(index: number) {
      const img = images[index] || images[1];
      if (!img) return;
      const cw = section.clientWidth;
      const ch = section.clientHeight;
      const iw = img.naturalWidth  || img.width;
      const ih = img.naturalHeight || img.height;
      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    }

    // ── rAF loop — NEVER draw directly from scroll event ──────────────────────
    function tick() {
      current += (target - current) * 0.1;
      const i = Math.max(1, Math.min(FRAME_COUNT, Math.round(current)));
      if (i !== lastDrawn) { draw(i); lastDrawn = i; }
      rafId = requestAnimationFrame(tick);
    }

    // ── Load single frame ──────────────────────────────────────────────────────
    function loadFrame(index: number): Promise<HTMLImageElement> {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = FRAME_PATH(index);
        img.onload = async () => {
          if ((img as any).decode) await (img as any).decode().catch(() => {});
          resolve(img);
        };
        img.onerror = reject;
      });
    }

    // ── GSAP overlay timeline (same progress as frame scrub) ──────────────────
    function setupOverlays() {
      const stConfig = {
        trigger: section,
        start: 'top top',
        end: `+=${SCROLL_LENGTH}`,
        scrub: 1,
      };

      const tl = gsap.timeline({ scrollTrigger: stConfig });

      // DORMANT 0–13%
      tl.fromTo(textEWRef.current,
        { opacity: 0, y: 20, letterSpacing: '0.05em' },
        { opacity: 1, y: 0,  letterSpacing: '0.35em', duration: 0.10 }, 0)
        .to(textEWRef.current, { opacity: 0, duration: 0.03 }, 0.10);

      // WAKE 13–27%
      tl.fromTo(textTitleRef.current,
        { opacity: 0, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
        { opacity: 1, clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', duration: 0.10 }, 0.13)
        .to(textTitleRef.current, { opacity: 0, duration: 0.04 }, 0.23);

      // RELEASE 27–46%  — odometer strictly bound to scroll progress, never a timer
      const speedObj = { val: 0 };
      tl.fromTo([textSpeedRef.current, textSpeedLabelRef.current],
        { opacity: 0, scale: 0.88 },
        { opacity: 1, scale: 1, duration: 0.05 }, 0.27)
        .to(speedObj, {
          val: 400, duration: 0.14, ease: 'none',
          onUpdate: () => {
            if (textSpeedRef.current)
              textSpeedRef.current.textContent = String(Math.round(speedObj.val));
          },
        }, 0.27)
        .to([textSpeedRef.current, textSpeedLabelRef.current], { opacity: 0, duration: 0.05 }, 0.41);

      // LOCK 46–73%
      tl.fromTo([spec1Ref.current, spec2Ref.current, spec3Ref.current],
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, stagger: 0.04, duration: 0.14 }, 0.46)
        .to([spec1Ref.current, spec2Ref.current, spec3Ref.current],
          { opacity: 0, duration: 0.05 }, 0.68);

      // RESOLVE 73–100%
      tl.fromTo(ctaRef.current,
        { opacity: 0, y: 56 },
        { opacity: 1, y: 0, duration: 0.15 }, 0.73);
    }

    // ── Main init ──────────────────────────────────────────────────────────────
    let isCancelled = false;
    const gsapCtx = gsap.context(() => {}, section);

    async function init() {
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      // 1. Critical frames first so hero is never blank
      try {
        images[1]   = await loadFrame(1);
        images[FRAME_COUNT] = await loadFrame(FRAME_COUNT);
        if (isCancelled) return;
        draw(1);
      } catch {
        return; // degrade gracefully to static frame
      }

      if (isCancelled) return;

      // Add to GSAP context so it gets cleaned up properly
      let autoScrollTween: gsap.core.Tween | null = null;
      
      gsapCtx.add(() => {
        // 2. Attach ScrollTrigger IMMEDIATELY so pinning works
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: `+=${SCROLL_LENGTH}`,
          pin: true,
          scrub: 1,
          onUpdate: self => { 
            const p = self.progress;
            
            // Auto-scroll the 5s-8s segment (frames 150-240)
            if (p >= 0.50 && p < 0.65 && self.direction === 1 && !autoScrollTween) {
              const targetY = self.start + (self.end - self.start) * 0.65;
              const scrollObj = { y: window.scrollY };
              autoScrollTween = gsap.to(scrollObj, {
                y: targetY,
                duration: 1.5,
                ease: 'power2.inOut',
                onUpdate: () => window.scrollTo(0, scrollObj.y),
                onComplete: () => { autoScrollTween = null; }
              });
            }

            // Custom non-linear mapping:
            // 0 - 0.5: Frames 1 - 150 (Normal speed)
            // 0.5 - 0.65: Frames 150 - 240 (Fast speed for 5-8s mark)
            // 0.65 - 1.0: Frames 240 - 299 (Slightly slower finish)
            if (p <= 0.5) {
              target = 1 + (p / 0.5) * 149;
            } else if (p <= 0.65) {
              target = 150 + ((p - 0.5) / 0.15) * 90;
            } else {
              target = 240 + ((p - 0.65) / 0.35) * 59;
            }
          },
        });

        setupOverlays();
      });

      tick();

      // 3. Load the rest of the sequence in the background (non-blocking)
      const promises = [];
      for (let i = 2; i < FRAME_COUNT; i++) {
        promises.push(
          loadFrame(i)
            .then(img => { if (!isCancelled) images[i] = img; })
            .catch(() => { /* skip missing frames */ })
        );
      }
      // We don't await this here, let them load asynchronously
      Promise.all(promises);
    }

    init();

    return () => {
      isCancelled = true;
      cancelAnimationFrame(rafId);
      gsapCtx.revert();
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black overflow-hidden"
      style={{ height: '100vh' }}
    >
      {/* ── Canvas — decorative, aria-hidden ── */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
      />

      {/* ── Bottom-weighted scrim so copy stays legible across all beats ── */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.10) 45%, transparent 100%)',
      }} />

      {/* ═══════════════════════ OVERLAY COPY — real HTML, selectable ════════════════════════ */}

      {/* DORMANT beat — EW label (Removed per request) */}
      <div style={OL_BASE}>
        <p ref={textEWRef} style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 'clamp(0.6rem, 1.1vw, 0.85rem)',
          letterSpacing: '0.05em', color: '#fff',
          opacity: 0, textTransform: 'uppercase', textAlign: 'center',
        }}>
          
        </p>
      </div>

      {/* WAKE beat — product title */}
      <div style={OL_BASE}>
        <h1
          ref={textTitleRef}
          style={{
            fontFamily: "'Chakra Petch', 'Archivo', sans-serif",
            fontSize: 'clamp(2rem, 5vw, 4.5rem)',
            fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.04em', color: '#fff',
            opacity: 0, lineHeight: 1.1, textAlign: 'center',
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
          }}
        >
          FPV Bullseye<br />&amp; Interceptor
        </h1>
      </div>

      {/* RELEASE beat — 400 KMPH odometer */}
      <div style={{ ...OL_BASE, justifyContent: 'flex-end', alignItems: 'flex-end', paddingBottom: '12vh', paddingRight: '5vw' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.75rem' }}>
          <div
            ref={textSpeedRef}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 'clamp(6vh, 11vw, 19vh)',
              fontWeight: 400, lineHeight: 1, color: '#fff',
              opacity: 0, fontVariantNumeric: 'tabular-nums',
              transform: 'scale(0.88)',
              letterSpacing: '-0.02em',
            }}
          >
            0
          </div>
          <div
            ref={textSpeedLabelRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              opacity: 0,
              transform: 'scale(0.88)',
              fontFamily: "Inter, sans-serif",
              color: '#fff',
              marginTop: '1vh'
            }}
          >
            <span style={{ fontSize: 'clamp(1rem, 2.25vw, 2.5rem)', lineHeight: 1, fontWeight: 400 }}>kmph</span>
            <span style={{ fontSize: 'clamp(0.5rem, 1vw, 1rem)', lineHeight: 1.2, fontWeight: 700 }}> (Max Speed)</span>
          </div>
        </div>
      </div>

      {/* LOCK beat — specs stagger from right */}
      <div style={{ ...OL_BASE, alignItems: 'flex-end', justifyContent: 'flex-end', paddingBottom: '10vh', paddingRight: '5vw' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1.25rem' }}>
          {[
            { ref: spec1Ref, label: '10 KM RANGE',   accent: false },
            { ref: spec2Ref, label: '3 KG PAYLOAD',  accent: false },
            { ref: spec3Ref, label: '22,000 mAh',    accent: true  },
          ].map(({ ref, label, accent }) => (
            <div key={label} ref={ref} style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 'clamp(0.85rem, 1.8vw, 1.35rem)',
              color: '#fff', opacity: 0, transform: 'translateX(60px)',
              paddingBottom: '0.5rem', minWidth: 200, textAlign: 'right',
              borderBottom: `1px solid ${accent ? '#FF4D1C' : 'rgba(255,255,255,0.18)'}`,
            }}>
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* RESOLVE beat — CTAs (Removed per request) */}
      <div style={{ ...OL_BASE, justifyContent: 'flex-end', paddingBottom: '12vh', pointerEvents: 'auto' }}>
        <div ref={ctaRef} style={{
          display: 'flex', flexWrap: 'wrap', gap: '1.25rem',
          justifyContent: 'center', opacity: 0, transform: 'translateY(56px)',
        }}>
          {/* CTAs removed */}
        </div>
      </div>

      {/* ── The heroRef / statsRef content sits here so existing GSAP entry
           animations in HandheldJammerPage still work unchanged ── */}
      {heroRef && (
        <div
          ref={heroRef as React.RefObject<HTMLDivElement>}
          style={{ position: 'absolute', bottom: 96, left: 0, right: 0, zIndex: 30,
                   maxWidth: 1200, margin: '0 auto', padding: '0 2.25rem',
                   pointerEvents: 'none', opacity: 0 /* hidden: canvas overlays own copy */ }}
        />
      )}
      {statsRef && (
        <div
          ref={statsRef as React.RefObject<HTMLDivElement>}
          style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 30,
                   pointerEvents: 'none', opacity: 0 /* hidden: canvas overlays own copy */ }}
        />
      )}
    </section>
  );
}

// ── Shared style objects ────────────────────────────────────────────────────────
const OL_BASE: React.CSSProperties = {
  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
  zIndex: 20, pointerEvents: 'none',
  display: 'flex', flexDirection: 'column',
  alignItems: 'center', justifyContent: 'center', padding: '2rem',
};

const CTA_BASE: React.CSSProperties = {
  fontFamily: "'Chakra Petch', 'Archivo', sans-serif",
  fontSize: '0.85rem', textTransform: 'uppercase',
  letterSpacing: '0.12em', padding: '0.875rem 2rem',
  cursor: 'pointer', borderRadius: 0,
  transition: 'all 0.25s ease',
};

const CTA_SECONDARY: React.CSSProperties = {
  ...CTA_BASE, background: 'transparent',
  color: '#fff', border: '1px solid rgba(255,255,255,0.3)',
};

const CTA_PRIMARY: React.CSSProperties = {
  ...CTA_BASE, background: '#FF4D1C',
  color: '#000', border: '1px solid #FF4D1C', fontWeight: 700,
};
