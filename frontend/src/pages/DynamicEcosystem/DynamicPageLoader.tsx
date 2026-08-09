import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router';
import DynamicHero from './components/DynamicHero';
import DynamicEcosystem from './components/DynamicEcosystem';
import DynamicCTA from './components/DynamicCTA';
import { SovereignStrip } from '../QuantumSensing/components/SovereignStrip';
import { cmsDb } from '../../cms/db';
import { sanityClient, urlFor } from '../../cms/sanity';

/** Resolve a Sanity image or file reference to a usable URL */
function resolveMedia(imageField: any, fileField: any): { url: string | null; isVideo: boolean } {
  // Video takes priority if both are set
  if (fileField?.asset?._ref) {
    const ref: string = fileField.asset._ref;
    const parts = ref.replace('file-', '').split('-');
    const ext = parts[parts.length - 1];
    const hash = parts.slice(0, parts.length - 1).join('-');
    const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'wtvw97ue';
    const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
    return {
      url: `https://cdn.sanity.io/files/${projectId}/${dataset}/${hash}.${ext}`,
      isVideo: true
    };
  }
  if (imageField) {
    return { url: urlFor(imageField).url(), isVideo: false };
  }
  return { url: null, isVideo: false };
}

/**
 * Normalize any page data (Sanity OR cmsDb) so every section has
 * resolvedBg / bgIsVideo / resolvedImg / imgIsVideo fields.
 * cmsDb uses plain string URLs (hero.bg, ecosystem.bgImage, card.img).
 * Sanity uses asset references resolved via resolveMedia().
 */
function normalizePage(data: any, fromSanity: boolean): any {
  if (!data) return data;

  // ── Hero ──
  if (data.hero) {
    if (fromSanity) {
      const m = resolveMedia(data.hero.bgImage, data.hero.bgVideo);
      data.hero.resolvedBg = m.url;
      data.hero.bgIsVideo = m.isVideo;
    } else {
      // cmsDb: hero.bg is a plain string (imported image/video url)
      const bg = data.hero.bg;
      data.hero.resolvedBg = bg || null;
      data.hero.bgIsVideo = typeof bg === 'string' && (bg.endsWith('.mp4') || bg.endsWith('.webm'));
    }
  }

  // ── Ecosystem section ──
  if (data.ecosystem) {
    if (fromSanity) {
      const m = resolveMedia(data.ecosystem.bgImage, data.ecosystem.bgVideo);
      data.ecosystem.resolvedBg = m.url;
      data.ecosystem.bgIsVideo = m.isVideo;
    } else {
      const bg = data.ecosystem.bgImage;
      data.ecosystem.resolvedBg = bg || null;
      data.ecosystem.bgIsVideo = typeof bg === 'string' && (bg.endsWith('.mp4') || bg.endsWith('.webm'));
    }

    if (data.ecosystem.cards) {
      data.ecosystem.cards = data.ecosystem.cards.map((card: any) => {
        if (fromSanity) {
          const m = resolveMedia(card.img, card.cardVideo);
          return { ...card, resolvedImg: m.url, imgIsVideo: m.isVideo };
        } else {
          const img = card.img;
          return {
            ...card,
            resolvedImg: img || null,
            imgIsVideo: typeof img === 'string' && (img.endsWith('.mp4') || img.endsWith('.webm'))
          };
        }
      });
    }
  }

  // ── CTA Block ──
  if (data.ctaBlock) {
    if (fromSanity) {
      const m = resolveMedia(data.ctaBlock.bgImage, data.ctaBlock.bgVideo);
      data.ctaBlock.resolvedBg = m.url;
      data.ctaBlock.bgIsVideo = m.isVideo;
    } else {
      data.ctaBlock.resolvedBg = null;
      data.ctaBlock.bgIsVideo = false;
    }
  }

  return data;
}

export default function DynamicPageLoader() {
  const { category, slug } = useParams<{ category: string, slug: string }>();
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    let subscription: any;

    async function fetchPage() {
      if (!slug) return;
      try {
        const data = await sanityClient.fetch(`*[_type == "ecosystemPage" && slug.current == $slug][0]`, { slug });
        if (data) {
          setPageData(normalizePage(data, true));
        } else {
           // Fallback to cmsDb
           const localData = category && slug && (cmsDb as any)[category]?.[slug];
           if (localData) {
             setPageData(normalizePage(localData, false));
           } else {
             setPageData(false); // trigger 404/redirect
           }
        }
      } catch (err) {
        console.error("Failed to fetch ecosystem page:", err);
      }
    }

    fetchPage();

    subscription = sanityClient
      .listen(`*[_type == "ecosystemPage" && slug.current == $slug]`, { slug }, { includeResult: false })
      .subscribe(() => {
        console.log(`[Sanity] Ecosystem Page ${slug} updated — refreshing...`);
        fetchPage();
      });

    return () => {
      if (subscription) subscription.unsubscribe();
    };
  }, [category, slug]);

  if (pageData === false) {
      return <Navigate to="/" replace />;
  }

  if (!pageData) {
      return null;
  }

  return (
      <div className="bg-[#050505] min-h-screen font-['Inter',sans-serif]">
          <DynamicHero data={pageData.hero} />
          <DynamicEcosystem data={pageData.ecosystem} />
          <SovereignStrip />
          <DynamicCTA data={pageData.ctaBlock} />
      </div>
  );
}
