import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SwimmingHoleCard } from '@/components/SwimmingHoleCard';
import { Breadcrumb } from '@/components/Breadcrumb';
import { AdSlot } from '@/components/AdSense';
import { 
  getStateBySlug, 
  getSwimmingHolesByState, 
  getAllStates,
  StateCode,
} from '@/data';
import { generateStateMetadata, generateCollectionPageJsonLd } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const states = getAllStates();
  return states.map((state) => ({
    slug: state.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const state = getStateBySlug(slug);
  
  if (!state) {
    return {
      title: 'State Not Found',
    };
  }

  const holes = getSwimmingHolesByState(state.code as StateCode);
  return generateStateMetadata(state, holes.length);
}

export default async function StatePage({ params }: PageProps) {
  const { slug } = await params;
  const state = getStateBySlug(slug);

  if (!state) {
    notFound();
  }

  const holes = getSwimmingHolesByState(state.code as StateCode);
  const jsonLd = generateCollectionPageJsonLd(
    `Swimming Holes in ${state.name}`,
    state.description,
    holes
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: 'States', href: '/states' },
            { name: state.name, href: `/states/${state.slug}` },
          ]}
        />

        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Swimming Holes in {state.name}
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            {state.description}
          </p>
          <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
            {holes.length} swimming hole{holes.length !== 1 ? 's' : ''} listed
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {holes.map((hole) => (
            <SwimmingHoleCard key={hole.id} hole={hole} />
          ))}
        </div>

        <div className="mt-12">
          <AdSlot slot={`state-${state.slug}-bottom`} />
        </div>

        <section className="mt-16 prose dark:prose-invert max-w-none">
          <h2>Swimming in {state.name}</h2>
          <p>
            {state.name} offers a variety of natural swimming experiences, from 
            {state.code === 'AZ' 
              ? ' mountain streams and waterfalls in the high country to spring-fed pools in the desert.' 
              : ' hot springs and mountain reservoirs to slot canyon pools and desert rivers.'}
          </p>
          
          <h3>Before You Go</h3>
          <ul>
            <li>Check current conditions and any permit requirements with the managing agency</li>
            <li>Be aware of seasonal variations in water levels and accessibility</li>
            <li>Bring appropriate gear including water shoes and sun protection</li>
            <li>Know the signs of flash flood danger, especially during monsoon season</li>
            <li>Practice Leave No Trace principles to help preserve these natural areas</li>
          </ul>

          <h3>Safety Considerations</h3>
          <p>
            Swimming in natural bodies of water involves inherent risks. Water depth, current, 
            temperature, and underwater hazards can vary. Always check conditions before entering, 
            never dive into unfamiliar water, and be especially cautious during monsoon season 
            when flash floods can occur with little warning.
          </p>
        </section>
      </div>
    </>
  );
}
