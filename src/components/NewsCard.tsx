import Image from 'next/image';
import Link from 'next/link';
import { Clock, ExternalLink } from 'lucide-react';
import { Article, CATEGORIES } from '@/lib/types';
import { formatDate, truncate } from '@/lib/api';

interface NewsCardProps {
  article: Article;
  featured?: boolean;
}

export default function NewsCard({ article, featured = false }: NewsCardProps) {
  const category = article.category?.[0] || 'top';
  const cat = CATEGORIES.find((c) => c.slug === category);
  const imageUrl = article.image_url;

  if (featured) {
    return (
      <div className="news-card overflow-hidden rounded-xl shadow-lg">
        <div className="relative h-72 md:h-96 bg-gray-200">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              unoptimized
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-brand-navy to-gray-800 flex items-center justify-center">
              <span className="text-6xl">📰</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            {cat && (
              <span className={`category-badge ${cat.color} mb-2`}>{cat.label}</span>
            )}
            <h2 className="text-xl md:text-2xl font-bold font-headline leading-tight mb-2">
              {truncate(article.title, 120)}
            </h2>
            <p className="text-sm text-gray-300 mb-3 hidden md:block">
              {truncate(article.description || '', 160)}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {formatDate(article.pubDate)}
              </span>
              <span className="uppercase font-semibold">{article.source_id}</span>
            </div>
            <Link
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 bg-brand-saffron hover:bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              Read Full Story <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="news-card flex flex-col h-full">
      <div className="relative h-44 bg-gray-200 shrink-0">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <span className="text-4xl">📰</span>
          </div>
        )}
        {cat && (
          <span className={`category-badge ${cat.color} absolute top-2 left-2`}>
            {cat.label}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold font-headline text-base leading-snug mb-2 line-clamp-3 text-gray-900">
          {article.title}
        </h3>
        {article.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">
            {article.description}
          </p>
        )}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <div className="text-xs text-gray-400 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {formatDate(article.pubDate)}
          </div>
          <Link
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold text-brand-red hover:text-red-700 transition-colors"
          >
            Read <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
