import { Metadata } from 'next';
import { Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact IndiaFlash News — reach out with questions, feedback, or editorial inquiries.',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Info */}
        <div className="md:col-span-1 space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Contact Us</h1>
            <div className="w-12 h-1 bg-brand-red rounded" />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Have a story tip, feedback, or a question? We&apos;re here to help.
            Reach out using the form and our team will get back to you shortly.
          </p>

          <div className="space-y-3">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'editorial@indiaflashnews.com',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'New Delhi, India',
              },
              {
                icon: Clock,
                label: 'Response Time',
                value: 'Within 24 hours',
              },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="bg-brand-red/10 rounded-lg p-2 mt-0.5">
                  <Icon className="w-4 h-4 text-brand-red" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-medium text-gray-700">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-5">Send us a message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red text-gray-700">
                <option value="">Select a topic</option>
                <option value="editorial">Editorial / Story Tip</option>
                <option value="feedback">General Feedback</option>
                <option value="advertising">Advertising Inquiry</option>
                <option value="technical">Technical Issue</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message here..."
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand-red hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition-colors"
            >
              Send Message
            </button>
            <p className="text-xs text-gray-400 text-center">
              By submitting, you agree to our{' '}
              <a href="/privacy-policy" className="text-brand-red hover:underline">Privacy Policy</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
