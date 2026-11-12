import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { SearchBox } from '@/components/SearchBox';
import { PhotoCredit } from '@/components/PhotoCredit';
import { SwimmingHoleCard } from '@/components/SwimmingHoleCard';
import { StateCard } from '@/components/StateCard';
import { AdSlot } from '@/components/AdSense';
import { getFeaturedSwimmingHoles, getAllStates, getSwimmingHoleCount } from '@/data';
import { generateMetadata as generateSeoMetadata, SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: `${SITE_NAME} - ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
  path: '/',
});

export default function HomePage() {
  const featuredHoles = getFeaturedSwimmingHoles();
  const states = getAllStates();
  const totalCount = getSwimmingHoleCount();

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-cyan-800 text-white">
        <Image
          src="/images/holes/fossil-creek-waterfall.jpg"
          alt="Turquoise swimming hole and waterfall at Fossil Creek"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Discover Natural Swimming Holes
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-white/90">
              Find the best swimming holes, waterfalls, and natural pools across America. 
              Your guide to hidden swimming spots with directions, tips, and local information.
            </p>
            
            <div className="mt-10 flex justify-center">
              <SearchBox />
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {totalCount} Swimming Holes
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                {states.length} States
              </span>
            </div>
          </div>
        </div>
        <PhotoCredit
          hole={{
            image: '/images/holes/fossil-creek-waterfall.jpg',
            imageCredit: 'Coconino National Forest',
            imageLicense: 'CC0 1.0',
            imageSource: 'https://commons.wikimedia.org/wiki/File:Waterfall_Trail_on_Fossil_Creek_(30099298955).jpg',
          }}
          className="absolute bottom-3 left-4 right-4 z-10 text-center text-xs text-white/80"
        />
      </section>

      {/* Featured Swimming Holes */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Featured Swimming Holes
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Our top picks for natural swimming destinations
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredHoles.map((hole) => (
              <SwimmingHoleCard key={hole.id} hole={hole} showState />
            ))}
          </div>
        </div>
      </section>

      {/* Ad Slot */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdSlot slot="home-middle" className="mx-auto max-w-4xl" />
        </div>
      </section>

      {/* Browse by State */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Browse by State
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Explore swimming holes in your area
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {states.map((state) => (
              <StateCard key={state.code} state={state} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/states"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              View All States
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Your Guide to Natural Swimming
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              {SITE_NAME} helps you discover the best natural swimming holes across America. 
              Whether you&apos;re searching for a &quot;swimming hole near me&quot; or planning a trip to 
              explore iconic waterfalls and hidden pools, we provide detailed information about 
              access, safety, amenities, and the best times to visit.
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Our listings include directions from nearby towns, information about facilities 
              and amenities, seasonal recommendations, and important safety notes. We research 
              public land information from the U.S. Forest Service, Bureau of Land Management, 
              and state parks to bring you accurate, useful details.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Detailed Directions
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                GPS coordinates, trailhead info, and access notes for every location.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Safety Information
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Important safety notes, hazards to be aware of, and seasonal considerations.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Best Time to Visit
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Seasonal recommendations and tips for when to plan your visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Explore?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Start searching for your next swimming adventure today.
          </p>
          <div className="mt-8">
            <Link
              href="/states"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-blue-600 font-medium hover:bg-blue-50 transition-colors"
            >
              Browse All Swimming Holes
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
