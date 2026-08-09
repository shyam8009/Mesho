import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SCROLL_LENGTH = '600%'; // Restored for ample scroll space with slow-mo

export function VideoScrollHero({ videoSrc }: { videoSrc: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Overlay copy refs (same as old FpvCanvasHero)
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

    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const gsapCtx = gsap.context(() => {

      // ── GSAP overlay timeline (synced to scroll progress) ────────────
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

        // RELEASE 27–46%
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

      let autoScrollTween: gsap.core.Tween | null = null;
      let userInterrupted = false;

      const onUserInteraction = () => {
        userInterrupted = true;
        if (autoScrollTween) {
          autoScrollTween.kill();
          autoScrollTween = null;
        }
      };

      window.addEventListener('wheel', onUserInteraction, { passive: true });
      window.addEventListener('touchstart', onUserInteraction, { passive: true });

      const initScrollTrigger = () => {
        const duration = video.duration || 30; // fallback if NaN
        const videoProxy = { currentTime: 0 };
        
        let totalTimelineDuration = duration;
        if (duration > 19) {
          const seg2End = Math.min(26, duration);
          const seg2Time = seg2End - 19;
          totalTimelineDuration += (seg2Time * 2.5) - seg2Time;
        }

        const stConfig = {
          trigger: section,
          start: 'top top',
          end: `+=${SCROLL_LENGTH}`,
          pin: true,
          scrub: 1, // 1 second smoothing
          onUpdate: (self) => {
            const currentT = videoProxy.currentTime;
            
            // Reset interruption flag if they scrub back before the auto-scroll zone
            if (currentT < 7.5) {
              userInterrupted = false;
            }

            // Auto-scroll logic: 8s to 14s
            if (currentT >= 8 && currentT < 14 && self.direction === 1 && !autoScrollTween && !userInterrupted) {
              const targetProgress = 14 / totalTimelineDuration;
              
              const targetY = self.start + (self.end - self.start) * targetProgress;
              const scrollObj = { y: window.scrollY };
              
              autoScrollTween = gsap.to(scrollObj, {
                y: targetY,
                duration: 6, // 14s - 8s = 6 seconds real time
                ease: 'none',
                onUpdate: () => window.scrollTo(0, scrollObj.y),
                onComplete: () => { autoScrollTween = null; }
              });
            }
          }
        };

        const masterTl = gsap.timeline({ scrollTrigger: stConfig });

        // Segment 1: 0s to 19s (Normal speed, 1:1 ratio)
        masterTl.to(videoProxy, {
          currentTime: Math.min(19, duration),
          duration: Math.min(19, duration),
          ease: 'none',
          onUpdate: () => { video.currentTime = videoProxy.currentTime; }
        });

        // Segment 2: 19s to 26s (Slow motion - 2.5x duration stretch)
        if (duration > 19) {
          const seg2End = Math.min(26, duration);
          const seg2Time = seg2End - 19;
          masterTl.to(videoProxy, {
            currentTime: seg2End,
            duration: seg2Time * 2.5, // Stretch!
            ease: 'none',
            onUpdate: () => { video.currentTime = videoProxy.currentTime; }
          });
        }

        // Segment 3: 26s to end (Normal speed)
        if (duration > 26) {
          masterTl.to(videoProxy, {
            currentTime: duration,
            duration: duration - 26,
            ease: 'none',
            onUpdate: () => { video.currentTime = videoProxy.currentTime; }
          });
        }
        
        setupOverlays();
      };

      if (video.readyState >= 1) { // HAVE_METADATA or higher
        initScrollTrigger();
      } else {
        video.addEventListener('loadedmetadata', initScrollTrigger);
      }
    }, section);

    return () => {
      window.removeEventListener('wheel', onUserInteraction);
      window.removeEventListener('touchstart', onUserInteraction);
      gsapCtx.revert();
    };
  }, [videoSrc]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      <video
        ref={videoRef}
        src={videoSrc}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
      />
      {/* ── Bottom-weighted scrim so copy stays legible across all beats ── */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.10) 45%, transparent 100%)',
      }} />

      {/* ═══════════════════════ OVERLAY COPY ════════════════════════ */}

      {/* DORMANT beat */}
      <div style={OL_BASE}>
        <p ref={textEWRef} style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 'clamp(0.6rem, 1.1vw, 0.85rem)',
          letterSpacing: '0.05em', color: '#fff',
          opacity: 0, textTransform: 'uppercase', textAlign: 'center',
        }}>
          
        </p>
      </div>

      {/* WAKE beat */}
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

      {/* RELEASE beat */}
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

      {/* LOCK beat */}
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

      {/* RESOLVE beat */}
      <div style={{ ...OL_BASE, justifyContent: 'flex-end', paddingBottom: '12vh', pointerEvents: 'auto' }}>
        <div ref={ctaRef} style={{
          display: 'flex', flexWrap: 'wrap', gap: '1.25rem',
          justifyContent: 'center', opacity: 0, transform: 'translateY(56px)',
        }}>
          {/* CTAs removed */}
        </div>
      </div>
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
