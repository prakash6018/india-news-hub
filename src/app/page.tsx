import { Suspense } from 'react';
import { NewsResponse } from '@/lib/types';
import NewsCard from '@/components/NewsCard';
import NewsGrid from '@/components/NewsGrid';
import Sidebar from '@/components/Sidebar';
import AdUnit from '@/components/AdUnit';

async function getTopNews(): Promise<NewsResponse | null> {
  try {
    const apiKey = process.env.NEWSDATA_API_KEY;
    if (!apiKey) return null;
    const res = await fetch(
      `https://newsdata.io/api/1/news?apikey=${apiKey}&country=in&language=en`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (data.status === 'error') return null;
    return data;
  } catch {
    return null;
  }
}

export default async function HomePage() {
  const data = await getTopNews();
  const articles = data?.results?.filter((a) => a.title && a.title !== '[Removed]') ?? [];
  const featured = articles[0];
  const gridArticles = articles.slice(1);
  const sidebarArticles = articles.slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breaking Banner */}
      <div className="bg-brand-red text-white rounded-lg px-4 py-2 mb-6 flex items-center gap-3 overflow-hidden">
        <span className="shrink-0 bg-white text-brand-red text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wide">
          Live
        </span>
        <div className="overflow-hidden flex-1">
          <p className="ticker-text text-sm font-medium">
            🔴 Breaking: Latest news from across India — Stay tuned for live updates, top stories, and analysis &nbsp;|&nbsp;
            🇮🇳 IndiaFlash News — Covering India 24/7 &nbsp;|&nbsp;
            📊 Markets, Politics, Sports, Tech &amp; Entertainment — All in one place
          </p>
        </div>
      </div>

      {/* Top Leaderboard Ad */}
      <AdUnit adSlot="1111111111" adFormat="horizontal" label="Advertisement" className="mb-6" />

      {/* Error State */}
      {!data && (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
          <span className="text-6xl block mb-4">⚙️</span>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Setup Required</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Add your <strong>NEWSDATA_API_KEY</strong> to <code className="bg-gray-100 px-1 rounded">.env.local</code>
            {' '}to start fetching India news.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Get your free key at{' '}
            <span className="text-blue-600">newsdata.io</span> (200 credits/day)
          </p>
        </div>
      )}

      {data && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured Article */}
            {featured && (
              <Suspense fallback={<div className="h-96 bg-gray-200 rounded-xl animate-pulse" />}>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-brand-red block" />
                    Top Story
                    <span className="w-8 h-0.5 bg-brand-red block" />
                  </h2>
                  <NewsCard article={featured} featured />
                </div>
              </Suspense>
            )}

            {/* In-content Ad */}
            <AdUnit adSlot="2222222222" adFormat="rectangle" label="Sponsored" />

            {/* Section heading */}
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-bold text-gray-800">Latest India News</h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <NewsGrid articles={gridArticles} showAds />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar trendingArticles={sidebarArticles} />
          </div>
        </div>
      )}

      {/* Bottom Leaderboard Ad */}
      <AdUnit adSlot="3333333333" adFormat="horizontal" label="Advertisement" className="mt-8" />
    </div>
  );
}
