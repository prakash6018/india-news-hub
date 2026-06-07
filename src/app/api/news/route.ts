import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const category = searchParams.get('category') || '';
  const q = searchParams.get('q') || '';
  const page = searchParams.get('page') || '';

  const apiKey = process.env.NEWSDATA_API_KEY;
  if (!apiKey || apiKey === 'your_newsdata_api_key_here') {
    return NextResponse.json(
      { error: 'API key not configured. Add NEWSDATA_API_KEY to .env.local' },
      { status: 500 }
    );
  }

  const params = new URLSearchParams({
    apikey: apiKey,
    country: 'in',
    language: 'en',
  });

  if (category) params.set('category', category);
  if (q) params.set('q', q);
  if (page) params.set('page', page);

  try {
    const res = await fetch(
      `https://newsdata.io/api/1/news?${params.toString()}`,
      { next: { revalidate: 300 } }
    );
    const data = await res.json();

    if (data.status === 'error') {
      return NextResponse.json({ error: data.results?.message || 'API error' }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}
