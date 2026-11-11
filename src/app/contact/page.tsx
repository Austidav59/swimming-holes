import { Metadata } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { generateMetadata as generateSeoMetadata, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Contact Us',
  description: `Get in touch with ${SITE_NAME}. Send us feedback, corrections, or suggestions about swimming hole listings.`,
  path: '/contact',
});

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@example.com';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ name: 'Contact', href: '/contact' }]} />

      <div className="prose dark:prose-invert max-w-none">
        <h1>Contact Us</h1>

        <p className="lead">
          We value your feedback and are always looking to improve {SITE_NAME}. 
          Whether you have corrections, suggestions, or questions, we&apos;d love 
          to hear from you.
        </p>

        <h2>Ways to Reach Us</h2>

        <div className="not-prose my-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Email
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              For general inquiries, corrections, or feedback:
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <h2>What We Want to Hear About</h2>

        <h3>Corrections and Updates</h3>
        <p>
          If you notice inaccurate information on any of our listings—such as incorrect 
          directions, changed access conditions, outdated fees, or safety hazards we 
          haven&apos;t mentioned—please let us know. We strive to keep our information 
          current and accurate.
        </p>

        <h3>New Location Suggestions</h3>
        <p>
          Know of a great swimming hole that&apos;s not in our directory? We&apos;re always 
          looking to expand our coverage. Please include as much detail as possible, 
          including the location, managing agency, and what makes it worth visiting.
        </p>

        <h3>General Feedback</h3>
        <p>
          We welcome any suggestions for improving the website, adding features, or 
          making the information more useful for visitors.
        </p>

        <h2>Response Time</h2>
        <p>
          We aim to respond to all inquiries within a few business days. Please note 
          that we&apos;re a small team, so complex requests may take longer to address.
        </p>

        <h2>Disclaimer</h2>
        <p>
          While we do our best to maintain accurate information, we cannot guarantee 
          the completeness or accuracy of all listings. Always verify current conditions, 
          permits, and safety information with the relevant land management agency 
          before visiting any location.
        </p>
      </div>
    </div>
  );
}
