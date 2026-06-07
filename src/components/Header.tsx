'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, Menu, X, Newspaper } from 'lucide-react';
import { CATEGORIES } from '@/lib/types';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-brand-navy text-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-brand-red py-1 px-4 text-xs flex justify-between items-center">
        <span className="font-semibold tracking-wide">🇮🇳 IndiaFlash News — Your Trusted Source</span>
        <span className="hidden sm:block">
          {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="bg-brand-saffron rounded p-1.5">
            <Newspaper className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight">IndiaFlash</span>
            <span className="text-brand-saffron text-xl font-bold"> News</span>
            <p className="text-xs text-gray-400 leading-none">Breaking India News 24/7</p>
          </div>
        </Link>

        {/* Search */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md">
          <div className="flex w-full border border-gray-600 rounded overflow-hidden">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search news..."
              className="flex-1 px-3 py-2 bg-gray-800 text-white text-sm placeholder-gray-400 outline-none"
            />
            <button
              type="submit"
              className="px-3 bg-brand-saffron hover:bg-orange-500 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </form>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Category nav */}
      <nav className="bg-gray-900 border-t border-gray-700 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-1 overflow-x-auto scrollbar-none">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.slug === 'top' ? '/' : `/category/${cat.slug}`}
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors whitespace-nowrap"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <form onSubmit={handleSearch} className="p-3">
            <div className="flex border border-gray-600 rounded overflow-hidden">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search news..."
                className="flex-1 px-3 py-2 bg-gray-800 text-white text-sm placeholder-gray-400 outline-none"
              />
              <button type="submit" className="px-3 bg-brand-saffron">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>
          <div className="flex flex-col pb-2">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.slug === 'top' ? '/' : `/category/${cat.slug}`}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gray-700"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
