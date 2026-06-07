export interface Article {
  article_id: string;
  title: string;
  link: string;
  keywords: string[] | null;
  creator: string[] | null;
  video_url: string | null;
  description: string | null;
  content: string | null;
  pubDate: string;
  image_url: string | null;
  source_id: string;
  source_priority: number;
  country: string[];
  category: string[];
  language: string;
}

export interface NewsResponse {
  status: string;
  totalResults: number;
  results: Article[];
  nextPage: string | null;
}

export interface Category {
  slug: string;
  label: string;
  color: string;
}

export const CATEGORIES: Category[] = [
  { slug: 'top', label: 'Top News', color: 'bg-red-600' },
  { slug: 'politics', label: 'Politics', color: 'bg-blue-700' },
  { slug: 'business', label: 'Business', color: 'bg-green-700' },
  { slug: 'technology', label: 'Technology', color: 'bg-purple-700' },
  { slug: 'sports', label: 'Sports', color: 'bg-orange-600' },
  { slug: 'entertainment', label: 'Entertainment', color: 'bg-pink-600' },
  { slug: 'science', label: 'Science', color: 'bg-teal-700' },
  { slug: 'health', label: 'Health', color: 'bg-emerald-600' },
  { slug: 'world', label: 'World', color: 'bg-gray-700' },
  { slug: 'crime', label: 'Crime', color: 'bg-red-800' },
];
