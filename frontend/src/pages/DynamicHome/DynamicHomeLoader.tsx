import React, { useEffect, useState } from 'react';
import { sanityClient } from '../../cms/sanity';
import { homeDb } from '../../cms/db';
import { Hero, VisionSection, ProductsSection, Arsenal1Section, NewsSection, EditorialSection } from '../../app/App';

export default function DynamicHomeLoader() {
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fallback = {
      title: 'Home',
      pageBuilder: [
        { _type: 'blockHero', ...homeDb.hero },
        { _type: 'blockVision', ...homeDb.vision },
        { _type: 'blockProducts', ...homeDb.productsSection },
        { _type: 'blockArsenal', ...homeDb.arsenalSection },
        { _type: 'blockNews', ...homeDb.newsSection }
      ]
    };

    let subscription: any;

    async function fetchHome() {
      try {
        const query = `*[_type == "homePage"][0]`;
        const sanityData = await sanityClient.fetch(query);
        if (sanityData && sanityData.pageBuilder) {
          setPageData(sanityData);
        } else {
          setPageData(fallback);
        }
      } catch (err) {
        console.error('Sanity fetch failed:', err);
        setPageData(fallback);
      } finally {
        setLoading(false);
      }
    }

    // Initial load
    fetchHome();

    // Real-time — auto-refreshes content the moment you hit Publish in Sanity
    subscription = sanityClient
      .listen(`*[_type == "homePage"]`, {}, { includeResult: false })
      .subscribe(() => {
        console.log('[Sanity] Home page updated — refreshing...');
        fetchHome();
      });

    return () => {
      if (subscription) subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <div className="w-full h-screen bg-black flex items-center justify-center text-white">Initializing Autonomous Systems...</div>;
  }

  return (
    <>
      {pageData.pageBuilder.map((block: any, index: number) => {
        switch (block._type) {
          case 'blockHero':
            return <Hero key={index} data={block} />;
          case 'blockVision':
            return (
              <div key={index} className="relative w-full z-0">
                <VisionSection data={block} />
              </div>
            );
          case 'blockProducts':
            return (
              <div key={index} className="relative w-full z-0">
                <ProductsSection data={block} />
              </div>
            );
          case 'blockArsenal':
            return <Arsenal1Section key={index} data={block} />;
          case 'blockNews':
            return <NewsSection key={index} data={block} />;
          case 'blockEditorial':
            return <EditorialSection key={index} data={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
