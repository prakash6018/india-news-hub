'use client';

import { useEffect, useRef } from 'react';

interface AdUnitProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
  label?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdUnit({
  adSlot,
  adFormat = 'auto',
  className = '',
  label = 'Advertisement',
}: AdUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded yet (dev mode)
    }
  }, []);

  const adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-XXXXXXXXXXXXXXXX';

  return (
    <div className={`my-4 ${className}`}>
      <p className="ad-label">{label}</p>
      <div className="ad-container min-h-[90px]">
        <ins
          ref={adRef}
          className="adsbygoogle block"
          data-ad-client={adClient}
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-full-width-responsive="true"
          style={{ display: 'block' }}
        />
      </div>
    </div>
  );
}
