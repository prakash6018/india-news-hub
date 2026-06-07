'use client';

import { useEffect, useRef } from 'react';

export default function AdsterraNative() {
  const ref = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current || !ref.current) return;
    loaded.current = true;

    const script = document.createElement('script');
    script.async = true;
    script.dataset.cfasync = 'false';
    script.src = 'https://pl29665689.effectivecpmnetwork.com/ef42048f795a32359d1f71975f0bc5e7/invoke.js';
    ref.current.appendChild(script);
  }, []);

  return (
    <div className="my-4 flex justify-center">
      <div ref={ref}>
        <div id="container-ef42048f795a32359d1f71975f0bc5e7" />
      </div>
    </div>
  );
}
