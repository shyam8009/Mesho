import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router';
import { sanityClient, urlFor } from '../../cms/sanity';

const ProductContext = createContext<any>(null);

export function useProductContext() {
  return useContext(ProductContext);
}

function resolveMedia(imageField: any, fileField: any): { url: string | null; isVideo: boolean } {
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

export function useSectionMedia(sectionName: string, defaultBgStr?: string) {
  const productData = useProductContext();
  
  // Default values based on the hardcoded str if no context/override exists
  let resolvedUrl = defaultBgStr || null;
  let isVideo = defaultBgStr ? (defaultBgStr.endsWith('.mp4') || defaultBgStr.endsWith('.webm')) : false;

  if (productData && productData.sectionMediaOverrides) {
    const override = productData.sectionMediaOverrides.find((s: any) => s.sectionName === sectionName);
    if (override && (override.bgImage || override.bgVideo)) {
      const media = resolveMedia(override.bgImage, override.bgVideo);
      if (media.url) {
        resolvedUrl = media.url;
        isVideo = media.isVideo;
      }
    }
  }

  return { resolvedUrl, isVideo };
}

export function ProductLoader({ children }: { children: React.ReactNode }) {
  const [productData, setProductData] = useState<any>(null);
  const location = useLocation();
  const slug = location.pathname.substring(1); // e.g., "guardian-experience"

  useEffect(() => {
    let subscription: any;

    async function fetchProduct() {
      if (!slug) return;
      try {
        const data = await sanityClient.fetch(`*[_type == "product" && slug.current == $slug][0]`, { slug });
        setProductData(data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    }

    fetchProduct();

    subscription = sanityClient
      .listen(`*[_type == "product" && slug.current == $slug]`, { slug }, { includeResult: false })
      .subscribe(() => {
        console.log(`[Sanity] Product ${slug} updated — refreshing...`);
        fetchProduct();
      });

    return () => {
      if (subscription) subscription.unsubscribe();
    };
  }, [slug]);

  return (
    <ProductContext.Provider value={productData}>
      {children}
    </ProductContext.Provider>
  );
}

export function ProductLayout() {
  return (
    <ProductLoader>
      <Outlet />
    </ProductLoader>
  );
}
