interface MapPlaceholderProps {
  latitude: number;
  longitude: number;
  name: string;
  className?: string;
}

export function MapPlaceholder({ latitude, longitude, name, className = '' }: MapPlaceholderProps) {
  const zoom = 13;
  const mapUrl = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=${zoom}/${latitude}/${longitude}`;
  const staticMapUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${latitude},${longitude}&zoom=${zoom}&size=600x400&markers=${latitude},${longitude},ol-marker`;
  
  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      <a 
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`View ${name} on OpenStreetMap`}
      >
        <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center relative group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={staticMapUrl}
            alt={`Map showing location of ${name}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              View on OpenStreetMap
            </span>
          </div>
        </div>
      </a>
      
      <div className="absolute bottom-2 left-2 bg-white/90 dark:bg-gray-800/90 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-400">
        {latitude.toFixed(4)}°N, {Math.abs(longitude).toFixed(4)}°W
      </div>
      
      <div className="absolute bottom-2 right-2 bg-white/90 dark:bg-gray-800/90 px-2 py-1 rounded text-xs text-gray-500 dark:text-gray-500">
        © OpenStreetMap
      </div>
    </div>
  );
}

export function DirectionsLink({ latitude, longitude, name }: { latitude: number; longitude: number; name: string }) {
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
  const appleMapsUrl = `https://maps.apple.com/?daddr=${latitude},${longitude}&dirflg=d`;
  
  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
        Get Directions
      </a>
      <a
        href={appleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
      >
        Apple Maps
      </a>
    </div>
  );
}
