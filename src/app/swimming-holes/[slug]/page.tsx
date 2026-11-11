import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SwimmingHoleCard } from '@/components/SwimmingHoleCard';
import { MapPlaceholder, DirectionsLink } from '@/components/MapPlaceholder';
import { AdSlot } from '@/components/AdSense';
import {
  allSwimmingHoles,
  getSwimmingHoleBySlug,
  getNearbySwimmingHoles,
  getStateByCode,
  WATER_TYPE_LABELS,
  AMENITY_LABELS,
} from '@/data';
import { generateSwimmingHoleMetadata, generateSwimmingHoleJsonLd, SITE_URL } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allSwimmingHoles.map((hole) => ({
    slug: hole.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const hole = getSwimmingHoleBySlug(slug);

  if (!hole) {
    return {
      title: 'Swimming Hole Not Found',
    };
  }

  return generateSwimmingHoleMetadata(hole);
}

export default async function SwimmingHolePage({ params }: PageProps) {
  const { slug } = await params;
  const hole = getSwimmingHoleBySlug(slug);

  if (!hole) {
    notFound();
  }

  const state = getStateByCode(hole.state);
  const nearbyHoles = getNearbySwimmingHoles(hole, 4);
  const jsonLd = generateSwimmingHoleJsonLd(hole);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: 'States', href: '/states' },
            { name: state.name, href: `/states/${state.slug}` },
            { name: hole.name, href: `/swimming-holes/${hole.slug}` },
          ]}
        />

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                {hole.name}
              </h1>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400 flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Near {hole.nearestTown}, {hole.stateFullName}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {WATER_TYPE_LABELS[hole.waterType]}
              </span>
              {hole.featured && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  Featured
                </span>
              )}
            </div>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Map */}
            <MapPlaceholder
              latitude={hole.latitude}
              longitude={hole.longitude}
              name={hole.name}
              className="w-full"
            />

            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                About {hole.name}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {hole.description}
              </p>
            </section>

            {/* Access Notes */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Access &amp; Directions
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {hole.accessNotes}
              </p>
              <DirectionsLink
                latitude={hole.latitude}
                longitude={hole.longitude}
                name={hole.name}
              />
            </section>

            {/* Safety Notes */}
            <section className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
              <h2 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
                Safety Information
              </h2>
              <p className="text-amber-900 dark:text-amber-100">
                {hole.safetyNotes}
              </p>
            </section>

            <AdSlot slot={`swimming-hole-${hole.slug}`} className="my-8" />

            {/* Best Time to Visit */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Best Time to Visit
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {hole.seasonBestTime}
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Quick Facts
              </h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Water Type
                  </dt>
                  <dd className="text-gray-900 dark:text-white">
                    {WATER_TYPE_LABELS[hole.waterType]}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Nearest Town
                  </dt>
                  <dd className="text-gray-900 dark:text-white">{hole.nearestTown}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    State
                  </dt>
                  <dd className="text-gray-900 dark:text-white">
                    <Link
                      href={`/states/${state.slug}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {hole.stateFullName}
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Coordinates
                  </dt>
                  <dd className="text-gray-900 dark:text-white text-sm">
                    {hole.latitude.toFixed(4)}°N, {Math.abs(hole.longitude).toFixed(4)}°W
                  </dd>
                </div>
                {hole.managedBy && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Managed By
                    </dt>
                    <dd className="text-gray-900 dark:text-white text-sm">
                      {hole.managedBy}
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Amenities */}
            {hole.amenities.length > 0 && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Amenities
                </h3>
                <ul className="space-y-2">
                  {hole.amenities.map((amenity) => (
                    <li
                      key={amenity}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {AMENITY_LABELS[amenity]}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Source Attribution */}
            {hole.sourceAttribution && (
              <div className="text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <p className="font-medium mb-1">Data Sources</p>
                <p>{hole.sourceAttribution}</p>
              </div>
            )}
          </aside>
        </div>

        {/* Nearby Swimming Holes */}
        {nearbyHoles.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Nearby Swimming Holes in {hole.stateFullName}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {nearbyHoles.map((nearbyHole) => (
                <SwimmingHoleCard key={nearbyHole.id} hole={nearbyHole} />
              ))}
            </div>
          </section>
        )}

        {/* Browse More */}
        <section className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Looking for more swimming spots?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/states/${state.slug}`}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              More in {hole.stateFullName}
            </Link>
            <Link
              href="/states"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-gray-800 px-6 py-3 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Browse All States
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
