import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for IndiaFlash News — how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <div className="w-16 h-1 bg-brand-red rounded mb-2" />
        <p className="text-sm text-gray-500 mb-8">Last updated: June 2025</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
            <p>
              IndiaFlash News is a news aggregation service. We may collect the following types
              of information when you visit our website:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-600">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address (anonymized)</li>
              <li>Pages visited and time spent</li>
              <li>Referring website or search query</li>
            </ul>
            <p className="mt-3">
              We do <strong>not</strong> require account registration and do <strong>not</strong> collect
              personally identifiable information such as your name or email unless you voluntarily
              contact us via the contact form.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Cookies</h2>
            <p>
              We use cookies to improve your browsing experience. These include:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-600">
              <li><strong>Essential cookies:</strong> Required for basic site functionality</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site (via Google Analytics)</li>
              <li><strong>Advertising cookies:</strong> Used by Google AdSense to serve relevant advertisements</li>
            </ul>
            <p className="mt-3">
              You can control cookie settings through your browser. Disabling cookies may affect
              site functionality and ad relevance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Google AdSense and Advertising</h2>
            <p>
              IndiaFlash News uses Google AdSense to display advertisements. Google uses cookies
              to serve ads based on your prior visits to this site and other sites on the internet.
              Google&apos;s use of advertising cookies enables it and its partners to serve ads based on
              your visit to our site and/or other sites on the Internet.
            </p>
            <p className="mt-3">
              You may opt out of personalized advertising by visiting{' '}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-red hover:underline"
              >
                Google Ads Settings
              </a>
              . Alternatively, you can opt out of a third-party vendor&apos;s use of cookies by visiting
              the{' '}
              <a
                href="http://www.networkadvertising.org/managing/opt_out.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-red hover:underline"
              >
                Network Advertising Initiative opt-out page
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Third-Party Links</h2>
            <p>
              IndiaFlash News aggregates content from third-party news sources. When you click on
              any article, you will be redirected to the original publisher&apos;s website. We are not
              responsible for the privacy practices of external sites. We encourage you to review
              the privacy policy of any site you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information. However,
              no method of transmission over the Internet is 100% secure. We strive to protect your
              personal information but cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Children&apos;s Privacy</h2>
            <p>
              IndiaFlash News is not directed at children under 13 years of age. We do not knowingly
              collect personal information from children under 13. If you believe we have inadvertently
              collected such information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              We encourage you to periodically review this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at our{' '}
              <a href="/contact" className="text-brand-red hover:underline">Contact page</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
