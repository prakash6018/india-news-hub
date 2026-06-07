import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CATEGORIES, NewsResponse } from '@/lib/types';
import NewsGrid from '@/components/NewsGrid';
import Sidebar from '@/components/Sidebar';
import AdUnit from '@/components/AdUnit';

interface PageProps {
  params: { slug: string };
}

async function getCategoryNews(category: string): Promise<NewsResponse | null> {
  try {
    const apiKey = process.env.NEWSDATA_API_KEY;
    if (!apiKey) return null;
    const res = await fetch(
      `https://newsdata.io/api/1/news?apikey=${apiKey}&country=in&language=en&category=${category}`,
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cat = CATEGORIES.find((c) => c.slug === params.slug);
  if (!cat) return {};
  return {
    title: `${cat.label} News India`,
    description: `Latest ${cat.label} news from India. Stay updated with breaking ${cat.label.toLowerCase()} stories, analysis, and live updates on IndiaFlash News.`,
  };
}

export async function generateStaticParams() {
  return CATEGORIES.filter((c) => c.slug !== 'top').map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: PageProps) {
  const cat = CATEGORIES.find((c) => c.slug === params.slug);
  if (!cat) notFound();

  const data = await getCategoryNews(params.slug);
  const articles = data?.results?.filter((a) => a.title && a.title !== '[Removed]') ?? [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Category Header */}
      <div className={`${cat.color} text-white rounded-xl px-6 py-5 mb-6`}>
        <p className="text-xs uppercase tracking-widest text-white/70 mb-1">Browse Category</p>
        <h1 className="text-2xl md:text-3xl font-bold">{cat.label} News</h1>
        <p className="text-sm text-white/80 mt-1">
          Latest {cat.label.toLowerCase()} news and updates from India — IndiaFlash News
        </p>
      </div>

      {/* Top Ad */}
      <AdUnit adSlot="4444444444" adFormat="horizontal" label="Advertisement" className="mb-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {articles.length === 0 ? (
            <div className="text-center py-16">
              <span className="text-5xl block mb-4">📭</span>
              <p className="text-gray-600">No articles available for this category yet.</p>
              <p className="text-sm text-gray-400 mt-1">Make sure your API key is configured in .env.local</p>
            </div>
          ) : (
            <NewsGrid articles={articles} showAds />
          )}
        </div>
        <div className="lg:col-span-1">
          <Sidebar trendingArticles={articles.slice(0, 8)} />
        </div>
      </div>

      <AdUnit adSlot="5555555555" adFormat="horizontal" label="Advertisement" className="mt-8" />
    </div>
  );
}
