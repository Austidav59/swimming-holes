import { arizonaSwimmingHoles } from './arizona';
import { utahSwimmingHoles } from './utah';
import { SwimmingHole, StateCode, STATES, StateInfo } from './types';

export * from './types';

export const allSwimmingHoles: SwimmingHole[] = [
  ...arizonaSwimmingHoles,
  ...utahSwimmingHoles,
];

export function getSwimmingHolesByState(stateCode: StateCode): SwimmingHole[] {
  return allSwimmingHoles.filter(hole => hole.state === stateCode);
}

export function getSwimmingHoleBySlug(slug: string): SwimmingHole | undefined {
  return allSwimmingHoles.find(hole => hole.slug === slug);
}

export function getFeaturedSwimmingHoles(): SwimmingHole[] {
  return allSwimmingHoles.filter(hole => hole.featured);
}

export function getStateBySlug(slug: string): StateInfo | undefined {
  return Object.values(STATES).find(state => state.slug === slug);
}

export function getStateByCode(code: StateCode): StateInfo {
  return STATES[code];
}

export function getAllStates(): StateInfo[] {
  return Object.values(STATES);
}

export function getNearbySwimmingHoles(
  currentHole: SwimmingHole,
  limit: number = 4
): SwimmingHole[] {
  const sameState = allSwimmingHoles.filter(
    hole => hole.state === currentHole.state && hole.id !== currentHole.id
  );
  
  const withDistance = sameState.map(hole => ({
    hole,
    distance: calculateDistance(
      currentHole.latitude,
      currentHole.longitude,
      hole.latitude,
      hole.longitude
    ),
  }));
  
  withDistance.sort((a, b) => a.distance - b.distance);
  
  return withDistance.slice(0, limit).map(item => item.hole);
}

function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 3959; // Earth's radius in miles
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}

export function getSwimmingHoleCount(): number {
  return allSwimmingHoles.length;
}

export function getStateSwimmingHoleCount(stateCode: StateCode): number {
  return getSwimmingHolesByState(stateCode).length;
}

export function searchSwimmingHoles(query: string): SwimmingHole[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return [];
  
  return allSwimmingHoles.filter(hole => {
    const searchableText = [
      hole.name,
      hole.nearestTown,
      hole.stateFullName,
      hole.description,
      hole.waterType,
    ].join(' ').toLowerCase();
    
    return searchableText.includes(lowerQuery);
  });
}

export function getSwimmingHolesByWaterType(waterType: string): SwimmingHole[] {
  return allSwimmingHoles.filter(hole => hole.waterType === waterType);
}
