import { Article } from '@/lib/types';
import NewsCard from './NewsCard';
import AdsterraBanner from './AdsterraBanner';

interface NewsGridProps {
  articles: Article[];
  showAds?: boolean;
}

export default function NewsGrid({ articles, showAds = true }: NewsGridProps) {
  if (!articles.length) {
    return (
      <div className="text-center py-16 text-gray-500">
        <span className="text-5xl block mb-4">📭</span>
        <p className="text-lg font-medium">No articles found</p>
        <p className="text-sm">Try a different category or search term</p>
      </div>
    );
  }

  const chunks: (Article | 'ad')[] = [];
  articles.forEach((article, i) => {
    chunks.push(article);
    // Insert an in-feed ad after every 6 articles
    if (showAds && (i + 1) % 6 === 0 && i !== articles.length - 1) {
      chunks.push('ad');
    }
  });

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {chunks.map((item, index) => {
          if (item === 'ad') {
            return (
              <div key={`ad-${index}`} className="sm:col-span-2 lg:col-span-3 flex justify-center">
                <AdsterraBanner adKey="561bc3fb06538ddcc498b578d98b7c2f" width={468} height={60} />
              </div>
            );
          }
          return <NewsCard key={(item as Article).article_id || index} article={item as Article} />;
        })}
      </div>
    </div>
  );
}
