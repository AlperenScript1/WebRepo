import { IconSun, IconMoon } from './icons/Icons';

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Açık temaya geç' : 'Koyu temaya geç'}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-studio-ink shadow-sm transition-all duration-300 hover:border-studio-accent hover:text-studio-accent dark:border-gray-700 dark:bg-studio-card dark:text-studio-glow dark:hover:border-studio-accent dark:hover:text-studio-accent"
    >
      {isDark ? <IconSun /> : <IconMoon />}
    </button>
  );
}
