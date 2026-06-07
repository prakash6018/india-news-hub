import { Metadata } from 'next';
import { NewsResponse } from '@/lib/types';
import NewsGrid from '@/components/NewsGrid';
import AdUnit from '@/components/AdUnit';

interface PageProps {
  searchParams: { q?: string };
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  return {
    title: searchParams.q ? `Search: ${searchParams.q}` : 'Search News',
    description: `Search results for "${searchParams.q}" on IndiaFlash News`,
  };
}

async function searchNews(query: string): Promise<NewsResponse | null> {
  try {
    const apiKey = process.env.NEWSDATA_API_KEY;
    if (!apiKey) return null;
    const res = await fetch(
      `https://newsdata.io/api/1/news?apikey=${apiKey}&country=in&language=en&q=${encodeURIComponent(query)}`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (data.status === 'error') return null;
    return data;
  } catch {
    return null;
  }
}

export default async function SearchPage({ searchParams }: PageProps) {
  const query = searchParams.q?.trim() || '';
  const data = query ? await searchNews(query) : null;
  const articles = data?.results?.filter((a) => a.title && a.title !== '[Removed]') ?? [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-6">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Search Results</p>
        <h1 className="text-2xl font-bold text-gray-900">
          {query ? (
            <>
              Results for &ldquo;<span className="text-brand-red">{query}</span>&rdquo;
              {articles.length > 0 && (
                <span className="text-sm font-normal text-gray-500 ml-3">
                  ({articles.length} articles found)
                </span>
              )}
            </>
          ) : (
            'Search for News'
          )}
        </h1>
      </div>

      <AdUnit adSlot="6666666666" adFormat="horizontal" label="Advertisement" className="mb-6" />

      {!query && (
        <div className="text-center py-16">
          <span className="text-6xl block mb-4">🔍</span>
          <p className="text-gray-600">Use the search bar above to find news</p>
        </div>
      )}

      {query && articles.length === 0 && (
        <div className="text-center py-16">
          <span className="text-6xl block mb-4">📭</span>
          <p className="text-gray-700 font-medium">No results found for &ldquo;{query}&rdquo;</p>
          <p className="text-sm text-gray-500 mt-1">Try different keywords or browse categories above</p>
        </div>
      )}

      {articles.length > 0 && <NewsGrid articles={articles} showAds />}
    </div>
  );
}
