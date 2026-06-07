import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about IndiaFlash News — your trusted source for breaking news from India covering politics, business, sports, technology, and entertainment.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">About IndiaFlash News</h1>
        <div className="w-16 h-1 bg-brand-red rounded mb-6" />

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <p className="text-lg">
            <strong>IndiaFlash News</strong> is a leading digital news aggregation platform dedicated
            to delivering accurate, timely, and comprehensive news coverage from across India and the world.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Our Mission</h2>
          <p>
            Our mission is to keep every Indian citizen informed and empowered through reliable,
            real-time news reporting. We believe that access to accurate information is a fundamental
            right, and we are committed to providing that at no cost to our readers.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What We Cover</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>Politics:</strong> National and state politics, elections, government policies</li>
            <li><strong>Business & Economy:</strong> Markets, startups, corporate news, RBI updates</li>
            <li><strong>Technology:</strong> Tech industry, innovations, cybersecurity, AI</li>
            <li><strong>Sports:</strong> Cricket, football, kabaddi, Olympics and more</li>
            <li><strong>Entertainment:</strong> Bollywood, OTT, celebrity news</li>
            <li><strong>Health:</strong> Medical breakthroughs, public health, wellness</li>
            <li><strong>Science:</strong> ISRO missions, research, education</li>
            <li><strong>Crime:</strong> Law enforcement, judiciary, crime reports</li>
            <li><strong>World:</strong> International news with an Indian perspective</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Editorial Standards</h2>
          <p>
            We aggregate news from reputed Indian and international publishers. We maintain strict
            editorial guidelines and only surface content from credible, verified news sources.
            We do not create or modify news content — all articles link directly to the original
            publisher for full transparency.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Technology</h2>
          <p>
            IndiaFlash News is powered by modern web technology built for speed and reliability.
            Our news feeds are updated every few minutes to ensure you always have the latest stories.
            The platform is fully responsive and works seamlessly across all devices.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Contact Us</h2>
          <p>
            Have questions, suggestions, or feedback? We&apos;d love to hear from you.
            Visit our <a href="/contact" className="text-brand-red hover:underline">Contact page</a> to
            get in touch with our team.
          </p>
        </div>
      </div>
    </div>
  );
}
