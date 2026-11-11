import Link from 'next/link';
import { SwimmingHole, WATER_TYPE_LABELS } from '@/data';

interface SwimmingHoleCardProps {
  hole: SwimmingHole;
  showState?: boolean;
}

export function SwimmingHoleCard({ hole, showState = false }: SwimmingHoleCardProps) {
  return (
    <article className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700 overflow-hidden">
      <Link href={`/swimming-holes/${hole.slug}`} className="block">
        <div className="relative h-48 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <svg
            className="h-16 w-16 text-blue-500/50"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
            />
          </svg>
          {hole.featured && (
            <span className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-xs font-semibold px-2 py-1 rounded-full">
              Featured
            </span>
          )}
          <span className="absolute bottom-3 right-3 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded-full">
            {WATER_TYPE_LABELS[hole.waterType]}
          </span>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {hole.name}
          </h3>
          
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
            <svg
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {hole.nearestTown}{showState && `, ${hole.state}`}
          </p>

          <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
            {hole.description.slice(0, 150)}...
          </p>

          {hole.amenities.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {hole.amenities.slice(0, 3).map((amenity) => (
                <span
                  key={amenity}
                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                >
                  {amenity.replace(/-/g, ' ')}
                </span>
              ))}
              {hole.amenities.length > 3 && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                  +{hole.amenities.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
