import { NewsResponse } from './types';

export async function fetchNews(params: {
  category?: string;
  q?: string;
  page?: string;
}): Promise<NewsResponse> {
  const searchParams = new URLSearchParams();
  if (params.category && params.category !== 'top') {
    searchParams.set('category', params.category);
  }
  if (params.q) searchParams.set('q', params.q);
  if (params.page) searchParams.set('page', params.page);

  const baseUrl = typeof window === 'undefined'
    ? process.env.NEXTAUTH_URL || 'http://localhost:3000'
    : '';

  const res = await fetch(`${baseUrl}/api/news?${searchParams.toString()}`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) throw new Error('Failed to fetch news');
  return res.json();
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function truncate(text: string, length: number): string {
  if (!text) return '';
  return text.length > length ? text.slice(0, length) + '...' : text;
}
