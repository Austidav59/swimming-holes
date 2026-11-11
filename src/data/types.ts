export interface SwimmingHole {
  id: string;
  slug: string;
  name: string;
  state: StateCode;
  stateFullName: string;
  nearestTown: string;
  latitude: number;
  longitude: number;
  description: string;
  accessNotes: string;
  waterType: WaterType;
  amenities: Amenity[];
  seasonBestTime: string;
  safetyNotes: string;
  managedBy?: string;
  sourceAttribution?: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  imageCredit?: string;
  imageLicense?: string;
  imageSource?: string;
}

export const IMAGE_LICENSE_URLS: Record<string, string> = {
  'CC0 1.0': 'https://creativecommons.org/publicdomain/zero/1.0/',
  'CC BY 2.0': 'https://creativecommons.org/licenses/by/2.0/',
  'CC BY-SA 2.0': 'https://creativecommons.org/licenses/by-sa/2.0/',
  'CC BY-SA 3.0': 'https://creativecommons.org/licenses/by-sa/3.0/',
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
};

export type StateCode = 'AZ' | 'UT';

export type WaterType = 
  | 'river'
  | 'creek'
  | 'spring'
  | 'lake'
  | 'reservoir'
  | 'natural-pool'
  | 'waterfall';

export type Amenity =
  | 'parking'
  | 'restrooms'
  | 'camping'
  | 'picnic-area'
  | 'hiking-trails'
  | 'cliff-jumping'
  | 'rope-swing'
  | 'fishing'
  | 'wheelchair-accessible'
  | 'pets-allowed'
  | 'shade'
  | 'sandy-beach';

export interface StateInfo {
  code: StateCode;
  name: string;
  slug: string;
  description: string;
  metaDescription: string;
  image?: string;
  imageAlt?: string;
  imageCredit?: string;
  imageLicense?: string;
  imageSource?: string;
}

export const STATES: Record<StateCode, StateInfo> = {
  AZ: {
    code: 'AZ',
    name: 'Arizona',
    slug: 'arizona',
    description: 'Arizona offers surprising aquatic escapes from its desert heat. From the red rock pools of Sedona to the cool mountain streams near Flagstaff and the iconic waterfalls of the Havasupai reservation, the Grand Canyon State features diverse swimming holes fed by snowmelt, springs, and perennial desert streams.',
    metaDescription: 'Discover the best swimming holes in Arizona. From Fossil Creek to Sedona\'s Oak Creek, find natural swimming spots with directions, tips, and local info.',
    image: '/images/states/arizona.png',
    imageAlt: 'Shaded relief map showing the outline of Arizona',
    imageCredit: 'SANtosito',
    imageLicense: 'CC BY-SA 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:USA_Arizona_relief_location_map.svg',
  },
  UT: {
    code: 'UT',
    name: 'Utah',
    slug: 'utah',
    description: 'Utah\'s dramatic canyon country hides some of the most scenic swimming holes in the American Southwest. Crystal-clear rivers carve through sandstone slot canyons, natural springs emerge in remote desert locations, and mountain reservoirs offer cool summer relief. Many of these spots require hiking to reach, rewarding visitors with uncrowded natural pools.',
    metaDescription: 'Find the best swimming holes in Utah. Explore natural pools, slot canyon streams, and mountain swimming spots with detailed access information and tips.',
    image: '/images/states/utah.png',
    imageAlt: 'Shaded relief map showing the outline of Utah',
    imageCredit: 'SANtosito',
    imageLicense: 'CC BY-SA 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:USA_Utah_relief_location_map.svg',
  }
};

export const WATER_TYPE_LABELS: Record<WaterType, string> = {
  'river': 'River',
  'creek': 'Creek',
  'spring': 'Natural Spring',
  'lake': 'Lake',
  'reservoir': 'Reservoir',
  'natural-pool': 'Natural Pool',
  'waterfall': 'Waterfall Pool'
};

export const AMENITY_LABELS: Record<Amenity, string> = {
  'parking': 'Parking Available',
  'restrooms': 'Restrooms',
  'camping': 'Camping Nearby',
  'picnic-area': 'Picnic Area',
  'hiking-trails': 'Hiking Trails',
  'cliff-jumping': 'Cliff Jumping',
  'rope-swing': 'Rope Swing',
  'fishing': 'Fishing',
  'wheelchair-accessible': 'Wheelchair Accessible',
  'pets-allowed': 'Pets Allowed',
  'shade': 'Natural Shade',
  'sandy-beach': 'Sandy Beach'
};
