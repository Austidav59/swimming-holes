import Link from 'next/link';
import { StateInfo, getStateSwimmingHoleCount } from '@/data';

interface StateCardProps {
  state: StateInfo;
}

export function StateCard({ state }: StateCardProps) {
  const count = getStateSwimmingHoleCount(state.code);

  return (
    <article className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700 overflow-hidden">
      <Link href={`/states/${state.slug}`} className="block">
        <div className="relative h-40 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <span className="relative text-white text-5xl font-bold opacity-80">
            {state.code}
          </span>
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
        </div>
      </Link>
    </article>
  );
}
