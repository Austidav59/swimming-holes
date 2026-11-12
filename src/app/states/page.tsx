import { Metadata } from 'next';
import { StateCard } from '@/components/StateCard';
import { Breadcrumb } from '@/components/Breadcrumb';
import { AdSlot } from '@/components/AdSense';
import { getAllStates, getSwimmingHoleCount } from '@/data';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Browse Swimming Holes by State',
  description: 'Explore natural swimming holes, waterfalls, and swimming spots organized by state. Find the best places to swim in Arizona, Utah, and more.',
  path: '/states',
});

export default function StatesPage() {
  const states = getAllStates();
  const totalCount = getSwimmingHoleCount();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ name: 'States', href: '/states' }]} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Browse Swimming Holes by State
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore {totalCount} natural swimming destinations across {states.length} states. 
          Select a state to discover waterfalls, swimming holes, and natural pools in that region.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {states.map((state) => (
          <StateCard key={state.code} state={state} />
        ))}
      </div>

      <div className="mt-12">
        <AdSlot slot="states-bottom" />
      </div>

      <section className="mt-16 prose dark:prose-invert max-w-none">
        <h2>Discover Swimming Holes Across America</h2>
        <p>
          The United States is home to countless natural swimming destinations, from crystal-clear 
          mountain streams to desert oases fed by natural springs. Each region offers unique 
          swimming experiences shaped by local geology, climate, and landscape.
        </p>
        <p>
          Our directory currently features swimming holes in the Southwest, with Arizona and Utah 
          offering some of the most dramatic and scenic swimming locations in the country. From 
          the travertine pools of Fossil Creek to the red rock canyons of southern Utah, these 
          states showcase the incredible diversity of natural swimming in America.
        </p>
        <h3>Planning Your Visit</h3>
        <p>
          Before visiting any swimming hole, we recommend checking current conditions with the 
          managing agency (such as the U.S. Forest Service or Bureau of Land Management), 
          understanding any permit requirements, and being aware of seasonal variations in water 
          levels and accessibility.
        </p>
      </section>
    </div>
  );
}
