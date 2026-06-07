import Link from 'next/link';
import { TrendingUp } from 'lucide-react';
import { Article, CATEGORIES } from '@/lib/types';
import AdUnit from './AdUnit';
import { truncate, formatDate } from '@/lib/api';

interface SidebarProps {
  trendingArticles?: Article[];
}

export default function Sidebar({ trendingArticles = [] }: SidebarProps) {
  return (
    <aside className="space-y-6">
      {/* Sidebar Ad - Top */}
      <AdUnit adSlot="9876543210" adFormat="rectangle" label="Advertisement" />

      {/* Trending */}
      {trendingArticles.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-brand-red px-4 py-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-white" />
            <h3 className="text-white font-bold text-sm uppercase tracking-wide">Trending Now</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {trendingArticles.slice(0, 8).map((article, i) => (
              <Link
                key={article.article_id || i}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 p-3 hover:bg-gray-50 transition-colors group"
              >
                <span className="text-2xl font-bold text-gray-200 group-hover:text-brand-saffron transition-colors w-8 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-brand-red line-clamp-2 leading-snug">
                    {truncate(article.title, 80)}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{formatDate(article.pubDate)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
        <div className="bg-brand-navy px-4 py-3">
          <h3 className="text-white font-bold text-sm uppercase tracking-wide">Browse by Category</h3>
        </div>
        <div className="p-3 grid grid-cols-2 gap-2">
          {CATEGORIES.filter((c) => c.slug !== 'top').map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className={`${cat.color} text-white text-xs font-semibold px-3 py-2 rounded text-center hover:opacity-90 transition-opacity`}
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Sidebar Ad - Bottom */}
      <AdUnit adSlot="1122334455" adFormat="rectangle" label="Advertisement" />

      {/* About Widget */}
      <div className="bg-gradient-to-br from-brand-navy to-gray-800 rounded-lg p-4 text-white text-sm">
        <h3 className="font-bold mb-2">About IndiaFlash News</h3>
        <p className="text-gray-300 text-xs leading-relaxed">
          Your trusted source for the latest breaking news from India. We aggregate top stories
          across politics, business, sports, technology and more — 24/7.
        </p>
        <Link href="/about" className="mt-2 inline-block text-brand-saffron text-xs hover:underline">
          Learn more →
        </Link>
      </div>
    </aside>
  );
}
