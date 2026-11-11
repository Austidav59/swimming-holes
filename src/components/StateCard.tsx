import Image from 'next/image';
import Link from 'next/link';
import { StateInfo, getStateSwimmingHoleCount } from '@/data';
import { PhotoCredit } from './PhotoCredit';

interface StateCardProps {
  state: StateInfo;
}

export function StateCard({ state }: StateCardProps) {
  const count = getStateSwimmingHoleCount(state.code);

  return (
    <article className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700 overflow-hidden">
      <Link href={`/states/${state.slug}`} className="block">
        <div className="relative h-64 bg-[#f3efe4] dark:bg-stone-900">
          {state.image && (
            <Image
              src={state.image}
              alt={state.imageAlt || `Map of ${state.name}`}
              fill
              className="object-contain p-3"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          )}
        </div>

        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {state.name}
          </h3>
          
          <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
            {count} swimming hole{count !== 1 ? 's' : ''}
          </p>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
            {state.description.slice(0, 150)}...
          </p>

          {state.image && (
            <PhotoCredit hole={state} linked={false} label="Map" className="mt-3 text-xs text-gray-500 dark:text-gray-400" />
          )}
        </div>
      </Link>
    </article>
  );
}
