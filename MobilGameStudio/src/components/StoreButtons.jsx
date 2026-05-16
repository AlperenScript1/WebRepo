import { IconApple, IconGooglePlay } from './icons/Icons';

export function AppStoreButton({ size = 'lg', className = '' }) {
  const isLarge = size === 'lg';

  return (
    <a
      href="#"
      className={`group inline-flex items-center gap-3 rounded-xl border border-gray-900 bg-gray-900 px-5 py-3 text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg dark:border-gray-600 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white ${isLarge ? 'min-w-[200px]' : 'px-3 py-2'} ${className}`}
      aria-label="Download on the App Store"
    >
      <IconApple className={isLarge ? 'w-7 h-7' : 'w-5 h-5'} />
      <div className="flex flex-col items-start leading-tight">
        <span className={`${isLarge ? 'text-[10px]' : 'text-[8px]'} opacity-80`}>
          Download on the
        </span>
        <span className={`font-semibold ${isLarge ? 'text-base' : 'text-xs'}`}>
          App Store
        </span>
      </div>
    </a>
  );
}

export function GooglePlayButton({ size = 'lg', className = '' }) {
  const isLarge = size === 'lg';

  return (
    <a
      href="#"
      className={`group inline-flex items-center gap-3 rounded-xl border border-gray-900 bg-gray-900 px-5 py-3 text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg dark:border-gray-600 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white ${isLarge ? 'min-w-[200px]' : 'px-3 py-2'} ${className}`}
      aria-label="GET IT ON Google Play"
    >
      <IconGooglePlay className={isLarge ? 'h-7 w-7' : 'h-5 w-5'} />
      <div className="flex flex-col items-start leading-tight">
        <span className={`${isLarge ? 'text-[10px]' : 'text-[8px]'} uppercase opacity-80`}>
          Get it on
        </span>
        <span className={`font-semibold ${isLarge ? 'text-base' : 'text-xs'}`}>
          Google Play
        </span>
      </div>
    </a>
  );
}

export function StoreIconButtons({ className = '' }) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <a
        href="#"
        aria-label="App Store"
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 text-white transition-all duration-300 hover:bg-studio-accent dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-studio-accent dark:hover:text-white"
      >
        <IconApple className="w-4 h-4" />
      </a>
      <a
        href="#"
        aria-label="Google Play"
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 text-white transition-all duration-300 hover:bg-studio-accent dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-studio-accent dark:hover:text-white"
      >
        <IconGooglePlay className="h-5 w-5" />
      </a>
    </div>
  );
}
