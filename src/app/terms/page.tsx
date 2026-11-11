import { Metadata } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { generateMetadata as generateSeoMetadata, SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Terms of Service',
  description: `Terms of Service for ${SITE_NAME}. Read our terms and conditions for using the website.`,
  path: '/terms',
});

export default function TermsPage() {
  const lastUpdated = 'November 2024';

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ name: 'Terms of Service', href: '/terms' }]} />

      <article className="prose dark:prose-invert max-w-none">
        <h1>Terms of Service</h1>
        
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {lastUpdated}
        </p>

        <p className="lead">
          Please read these Terms of Service (&quot;Terms&quot;) carefully before using the {SITE_NAME} 
          website located at {SITE_URL} (the &quot;Site&quot;). By accessing or using the Site, you 
          agree to be bound by these Terms.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using this Site, you accept and agree to be bound by these Terms 
          and our Privacy Policy. If you do not agree to these Terms, you should not use the Site.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          {SITE_NAME} provides information about natural swimming holes, waterfalls, and 
          swimming destinations in the United States. The Site includes descriptions, 
          directions, maps, safety information, and other details about various locations.
        </p>

        <h2>3. Important Disclaimers</h2>

        <h3>3.1 Informational Purposes Only</h3>
        <p>
          All information on this Site is provided for informational purposes only. We make 
          no warranties or representations about the accuracy, completeness, or reliability 
          of any information on the Site.
        </p>

        <h3>3.2 Assumption of Risk</h3>
        <p>
          <strong>Swimming in natural bodies of water involves inherent risks, including but 
          not limited to: drowning, injury from underwater hazards, flash floods, cold water 
          shock, water-borne illnesses, and wildlife encounters.</strong>
        </p>
        <p>
          By using information from this Site to visit any swimming location, you acknowledge 
          and accept these risks. You agree that:
        </p>
        <ul>
          <li>
            You are solely responsible for your own safety and the safety of those in your care
          </li>
          <li>
            Conditions can change rapidly and may differ from those described on the Site
          </li>
          <li>
            You will verify current conditions, regulations, and safety information with 
            relevant land management agencies before visiting any location
          </li>
          <li>
            You will exercise appropriate judgment and caution when swimming in natural water
          </li>
        </ul>

        <h3>3.3 No Guarantee of Access</h3>
        <p>
          We do not guarantee that any location listed on the Site is accessible, open to 
          the public, or safe to visit. Access conditions, permits, fees, and regulations 
          can change. Always verify with the managing agency before visiting.
        </p>

        <h2>4. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, {SITE_NAME.toUpperCase()}, ITS OWNERS, 
          OPERATORS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, 
          INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR EXEMPLARY DAMAGES ARISING FROM:
        </p>
        <ul>
          <li>Your use of or inability to use the Site</li>
          <li>Any information obtained from the Site</li>
          <li>Any visit to a location described on the Site</li>
          <li>Any injury, death, or property damage resulting from activities related to 
            locations described on the Site</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>
          The content on this Site, including text, graphics, logos, and software, is owned 
          by or licensed to {SITE_NAME} and is protected by copyright and other intellectual 
          property laws. You may not:
        </p>
        <ul>
          <li>Copy, reproduce, or distribute Site content without permission</li>
          <li>Modify or create derivative works from Site content</li>
          <li>Use Site content for commercial purposes without written consent</li>
        </ul>

        <h2>6. User Conduct</h2>
        <p>When using the Site, you agree not to:</p>
        <ul>
          <li>Violate any applicable laws or regulations</li>
          <li>Interfere with or disrupt the Site or its servers</li>
          <li>Attempt to gain unauthorized access to any part of the Site</li>
          <li>Use automated systems to access the Site without permission</li>
          <li>Submit false or misleading information</li>
        </ul>

        <h2>7. Third-Party Links</h2>
        <p>
          The Site may contain links to third-party websites or services. We are not 
          responsible for the content, privacy policies, or practices of any third-party 
          sites. Your use of third-party sites is at your own risk.
        </p>

        <h2>8. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless {SITE_NAME}, its owners, operators, 
          employees, and affiliates from any claims, damages, losses, or expenses arising 
          from your use of the Site or violation of these Terms.
        </p>

        <h2>9. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be posted 
          on this page with an updated &quot;Last updated&quot; date. Your continued use of the Site 
          after changes constitutes acceptance of the modified Terms.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the 
          United States, without regard to conflict of law principles.
        </p>

        <h2>11. Severability</h2>
        <p>
          If any provision of these Terms is found to be unenforceable, the remaining 
          provisions will continue in full force and effect.
        </p>

        <h2>12. Contact</h2>
        <p>
          If you have questions about these Terms, please contact us through our{' '}
          <a href="/contact">contact page</a>.
        </p>
      </article>
    </div>
  );
}
