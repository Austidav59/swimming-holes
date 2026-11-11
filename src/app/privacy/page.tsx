import { Metadata } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { generateMetadata as generateSeoMetadata, SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Privacy Policy',
  description: `Privacy Policy for ${SITE_NAME}. Learn how we collect, use, and protect your information.`,
  path: '/privacy',
});

export default function PrivacyPage() {
  const lastUpdated = 'November 2024';

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ name: 'Privacy Policy', href: '/privacy' }]} />

      <article className="prose dark:prose-invert max-w-none">
        <h1>Privacy Policy</h1>
        
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {lastUpdated}
        </p>

        <p className="lead">
          This Privacy Policy describes how {SITE_NAME} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) 
          collects, uses, and shares information when you use our website located at{' '}
          {SITE_URL} (the &quot;Site&quot;).
        </p>

        <h2>Information We Collect</h2>

        <h3>Information You Provide</h3>
        <p>
          We may collect information you voluntarily provide when you contact us, such as:
        </p>
        <ul>
          <li>Your email address</li>
          <li>Any other information you choose to include in your message</li>
        </ul>

        <h3>Automatically Collected Information</h3>
        <p>
          When you visit our Site, we may automatically collect certain information, including:
        </p>
        <ul>
          <li>Your IP address</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Pages you visit on our Site</li>
          <li>Time and date of your visit</li>
          <li>Time spent on pages</li>
          <li>Referring website addresses</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and communications</li>
          <li>Improve our Site and its content</li>
          <li>Analyze usage patterns and trends</li>
          <li>Maintain the security of our Site</li>
        </ul>

        <h2>Cookies and Tracking Technologies</h2>
        <p>
          Our Site may use cookies and similar tracking technologies to collect information 
          about your browsing activities. Cookies are small data files stored on your device.
        </p>
        <p>
          We may use:
        </p>
        <ul>
          <li>
            <strong>Essential cookies:</strong> Required for the Site to function properly
          </li>
          <li>
            <strong>Analytics cookies:</strong> Help us understand how visitors use our Site
          </li>
          <li>
            <strong>Advertising cookies:</strong> Used to deliver relevant advertisements
          </li>
        </ul>
        <p>
          You can control cookies through your browser settings. However, disabling cookies 
          may affect the functionality of some parts of the Site.
        </p>

        <h2>Third-Party Services</h2>

        <h3>Google AdSense</h3>
        <p>
          We use Google AdSense to display advertisements on our Site. Google AdSense may 
          use cookies and web beacons to collect information about your visits to this and 
          other websites to provide targeted advertisements. You can learn more about 
          Google&apos;s advertising practices and opt-out options at{' '}
          <a 
            href="https://policies.google.com/technologies/ads" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Google&apos;s Advertising Policies
          </a>.
        </p>

        <h3>Analytics</h3>
        <p>
          We may use third-party analytics services to help analyze how users use our Site. 
          These services may collect information sent by your browser, including your IP 
          address and pages you visit.
        </p>

        <h2>Data Sharing</h2>
        <p>
          We do not sell your personal information. We may share your information with:
        </p>
        <ul>
          <li>Service providers who assist in operating our Site</li>
          <li>Third-party advertising partners (as described above)</li>
          <li>Law enforcement when required by law</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement reasonable security measures to protect your information. However, 
          no method of transmission over the Internet or electronic storage is completely 
          secure, and we cannot guarantee absolute security.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our Site is not directed to children under 13 years of age. We do not knowingly 
          collect personal information from children under 13. If you believe we have 
          inadvertently collected such information, please contact us immediately.
        </p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul>
          <li>The right to access your personal information</li>
          <li>The right to correct inaccurate information</li>
          <li>The right to request deletion of your information</li>
          <li>The right to opt-out of certain data uses</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the information provided below.
        </p>

        <h2>Links to Other Sites</h2>
        <p>
          Our Site may contain links to other websites. We are not responsible for the 
          privacy practices of those sites. We encourage you to review the privacy policies 
          of any site you visit.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The updated policy will be 
          posted on this page with a new &quot;Last updated&quot; date. Your continued use of the 
          Site after any changes indicates your acceptance of the updated policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our privacy practices, please 
          contact us at the email address provided on our{' '}
          <a href="/contact">contact page</a>.
        </p>
      </article>
    </div>
  );
}
