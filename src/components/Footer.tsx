import Link from 'next/link';
import { Newspaper } from 'lucide-react';
import { CATEGORIES } from '@/lib/types';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-brand-saffron rounded p-1.5">
                <Newspaper className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-xl font-bold">
                IndiaFlash <span className="text-brand-saffron">News</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              IndiaFlash News is your trusted source for breaking news, in-depth analysis, and
              real-time updates from across India and the world. We cover politics, business,
              technology, sports, entertainment, and more.
            </p>
            <p className="text-xs text-gray-500 mt-3">
              🇮🇳 Powered by NewsData.io · India&apos;s Premier News Aggregator
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Categories</h4>
            <ul className="space-y-2">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={cat.slug === 'top' ? '/' : `/category/${cat.slug}`}
                    className="text-sm text-gray-400 hover:text-brand-saffron transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/privacy-policy', label: 'Privacy Policy' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-brand-saffron transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} IndiaFlash News. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            News content sourced from NewsData.io · For editorial queries:{' '}
            <Link href="/contact" className="text-brand-saffron hover:underline">
              contact us
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
