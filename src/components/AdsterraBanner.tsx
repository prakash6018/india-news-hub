'use client';

import { useEffect, useRef } from 'react';

interface AdsterraBannerProps {
  adKey: string;
  width: number;
  height: number;
}

export default function AdsterraBanner({ adKey, width, height }: AdsterraBannerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current || !ref.current) return;
    loaded.current = true;

    const optionsScript = document.createElement('script');
    optionsScript.text = `atOptions = { 'key': '${adKey}', 'format': 'iframe', 'height': ${height}, 'width': ${width}, 'params': {} };`;
    ref.current.appendChild(optionsScript);

    const invokeScript = document.createElement('script');
    invokeScript.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`;
    ref.current.appendChild(invokeScript);
  }, [adKey, width, height]);

  return (
    <div className="flex justify-center my-4">
      <div ref={ref} style={{ width, height }} />
    </div>
  );
}
