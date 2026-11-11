'use client';

import { useEffect } from 'react';

interface AdSlotProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: boolean;
  className?: string;
}

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export function AdSlot({ slot, format = 'auto', responsive = true, className = '' }: AdSlotProps) {
  useEffect(() => {
    if (ADSENSE_CLIENT && typeof window !== 'undefined') {
      try {
        // @ts-expect-error AdSense global
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // AdSense may not be loaded
      }
    }
  }, []);

  if (!ADSENSE_CLIENT) {
    return (
      <div 
        className={`bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-500 text-sm ${className}`}
        style={{ minHeight: '100px' }}
        aria-hidden="true"
      >
        <span>Ad Placeholder</span>
      </div>
    );
  }

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{ display: 'block' }}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? 'true' : 'false'}
    />
  );
}

export function AdSenseScript() {
  if (!ADSENSE_CLIENT) {
    return null;
  }

  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
      crossOrigin="anonymous"
    />
  );
}
