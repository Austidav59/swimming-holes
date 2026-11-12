import { Metadata } from 'next';
import { SwimmingHole, StateInfo, WATER_TYPE_LABELS } from '@/data';

export const SITE_NAME = 'SwimSpot';
export const SITE_TAGLINE = 'Find Natural Swimming Holes Across America';
export const SITE_DESCRIPTION = 'Discover the best natural swimming holes in the United States. Find hidden swimming spots, waterfalls, and natural pools with directions, tips, and local information.';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://swimspot.example.com';

export function generateMetadata({
  title,
  description,
  path = '',
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === '' || path === '/' 
    ? `${SITE_NAME} - ${SITE_TAGLINE}`
    : `${title} | ${SITE_NAME}`;
  
  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      ...(image && { images: [{ url: image, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      ...(image && { images: [image] }),
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export function generateSwimmingHoleMetadata(hole: SwimmingHole): Metadata {
  const title = `${hole.name} - Swimming Hole in ${hole.nearestTown}, ${hole.stateFullName}`;
  const description = `Visit ${hole.name} near ${hole.nearestTown}, ${hole.stateFullName}. ${hole.description.slice(0, 140)}...`;
  
  return generateMetadata({
    title,
    description,
    path: `/swimming-holes/${hole.slug}`,
    image: hole.image ? `${SITE_URL}${hole.image}` : undefined,
  });
}

export function generateStateMetadata(state: StateInfo, holeCount: number): Metadata {
  const title = `Swimming Holes in ${state.name} - ${holeCount} Natural Swimming Spots`;
  const description = state.metaDescription;
  
  return generateMetadata({
    title,
    description,
    path: `/states/${state.slug}`,
  });
}

export function generateSwimmingHoleJsonLd(hole: SwimmingHole) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: hole.name,
    description: hole.description,
    ...(hole.image && { image: `${SITE_URL}${hole.image}` }),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: hole.latitude,
      longitude: hole.longitude,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: hole.nearestTown,
      addressRegion: hole.state,
      addressCountry: 'US',
    },
    ...(hole.managedBy && {
      isAccessibleForFree: true,
      publicAccess: true,
    }),
    touristType: ['Nature Lovers', 'Swimmers', 'Hikers', 'Outdoor Enthusiasts'],
    additionalType: `https://schema.org/${WATER_TYPE_LABELS[hole.waterType].replace(/\s+/g, '')}`,
  };
}

export function generateBreadcrumbJsonLd(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  };
}

export function generateCollectionPageJsonLd(
  name: string,
  description: string,
  items: SwimmingHole[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((hole, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'TouristAttraction',
          name: hole.name,
          url: `${SITE_URL}/swimming-holes/${hole.slug}`,
        },
      })),
    },
  };
}
