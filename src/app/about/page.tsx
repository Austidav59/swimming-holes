import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { generateMetadata as generateSeoMetadata, SITE_NAME } from '@/lib/seo';
import { getSwimmingHoleCount, getAllStates } from '@/data';

export const metadata: Metadata = generateSeoMetadata({
  title: 'About Us',
  description: `Learn about ${SITE_NAME}, your guide to discovering natural swimming holes across America. We help outdoor enthusiasts find the best swimming spots.`,
  path: '/about',
});

export default function AboutPage() {
  const totalCount = getSwimmingHoleCount();
  const states = getAllStates();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ name: 'About', href: '/about' }]} />

      <article className="prose dark:prose-invert max-w-none">
        <h1>About {SITE_NAME}</h1>

        <p className="lead">
          {SITE_NAME} is your comprehensive guide to discovering natural swimming holes 
          across the United States. We help outdoor enthusiasts, families, and adventure 
          seekers find the perfect swimming spots for their next outdoor experience.
        </p>

        <h2>Our Mission</h2>
        <p>
          We believe that access to natural swimming areas should be easy to discover 
          and understand. Our mission is to compile accurate, useful information about 
          swimming holes, waterfalls, natural pools, and other swimming destinations, 
          making it simple for people to plan safe and enjoyable visits.
        </p>

        <h2>What We Offer</h2>
        <p>
          Currently, {SITE_NAME} features <strong>{totalCount} swimming holes</strong> across{' '}
          <strong>{states.length} states</strong>, including Arizona and Utah. For each 
          location, we provide:
        </p>
        <ul>
          <li>Detailed descriptions of the swimming area and its features</li>
          <li>GPS coordinates and directions from nearby towns</li>
          <li>Access information including permit requirements and parking</li>
          <li>Safety notes and hazard warnings</li>
          <li>Best times to visit based on seasonal conditions</li>
          <li>Available amenities like restrooms, camping, and hiking trails</li>
          <li>Information about the managing agency (Forest Service, BLM, State Parks, etc.)</li>
        </ul>

        <h2>Our Data Sources</h2>
        <p>
          We compile information from authoritative public sources including:
        </p>
        <ul>
          <li>U.S. Forest Service (USFS)</li>
          <li>Bureau of Land Management (BLM)</li>
          <li>National Park Service</li>
          <li>State Parks departments</li>
          <li>Recreation.gov</li>
          <li>Official county and municipal sources</li>
        </ul>
        <p>
          All descriptions are original and written specifically for {SITE_NAME}. We 
          clearly attribute our data sources and note when information is unverified or 
          may require confirmation with local authorities.
        </p>

        <h2>A Note on Safety</h2>
        <p>
          Swimming in natural bodies of water involves inherent risks that differ from 
          controlled swimming environments like pools. Water conditions, depth, current, 
          temperature, and underwater hazards can change rapidly and vary by season.
        </p>
        <p>
          We strongly encourage all visitors to:
        </p>
        <ul>
          <li>Check current conditions with the managing agency before visiting</li>
          <li>Never swim alone</li>
          <li>Never dive into unfamiliar water</li>
          <li>Be aware of flash flood dangers, especially during monsoon seasons</li>
          <li>Bring appropriate safety gear and first aid supplies</li>
          <li>Know your swimming abilities and limits</li>
        </ul>

        <h2>Growing Our Directory</h2>
        <p>
          We are actively expanding our directory to include more states and swimming 
          destinations. Our focus is on quality over quantity—we only list locations 
          where we can provide useful, accurate information.
        </p>

        <h2>Contact Us</h2>
        <p>
          Have feedback, corrections, or suggestions? We&apos;d love to hear from you. 
          Visit our <Link href="/contact">contact page</Link> to get in touch.
        </p>
      </article>
    </div>
  );
}
