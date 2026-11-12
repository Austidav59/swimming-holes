import { IMAGE_LICENSE_URLS } from '@/data';

interface PhotoCreditProps {
  hole: {
    image?: string;
    imageCredit?: string;
    imageLicense?: string;
    imageSource?: string;
  };
  className?: string;
  linked?: boolean;
  label?: string;
}

export function PhotoCredit({ hole, className, linked = true, label = 'Photo' }: PhotoCreditProps) {
  if (!hole.image || !hole.imageCredit) {
    return null;
  }

  const licenseUrl = linked && hole.imageLicense ? IMAGE_LICENSE_URLS[hole.imageLicense] : undefined;
  const sourceUrl = linked ? hole.imageSource : undefined;
  const sourceName = hole.imageSource?.includes('flickr.com') ? 'Flickr' : 'Wikimedia Commons';

  return (
    <p className={className}>
      {label}: {hole.imageCredit}
      {hole.imageLicense && (
        <>
          {', '}
          {licenseUrl ? (
            <a
              href={licenseUrl}
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              {hole.imageLicense}
            </a>
          ) : (
            hole.imageLicense
          )}
        </>
      )}
      {hole.imageSource && (
        <>
          {' '}
          via{' '}
          {sourceUrl ? (
            <a
              href={sourceUrl}
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              {sourceName}
            </a>
          ) : (
            sourceName
          )}
        </>
      )}
    </p>
  );
}
