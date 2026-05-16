import { useState } from 'react';
import { IconLogo, IconDownload } from './icons/Icons';
import ThemeToggle from './ThemeToggle';
import { useActiveSection } from '../hooks/useActiveSection';

const navLinks = [
  { href: '#games', id: 'games', label: 'Oyunlarımız' },
  { href: '#about', id: 'about', label: 'Hakkımızda' },
  { href: '#contact', id: 'contact', label: 'İletişim' },
];

const SECTION_IDS = navLinks.map((l) => l.id);

function IconMenu({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function IconClose({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function navLinkClass(isActive) {
  const base =
    'text-sm font-medium transition-colors duration-300';
  return isActive
    ? `${base} text-studio-accent dark:text-studio-accent`
    : `${base} text-gray-600 hover:text-studio-accent dark:text-gray-300 dark:hover:text-studio-accent`;
}

export default function Navbar({ isDark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-lg transition-colors duration-300 dark:border-gray-800 dark:bg-studio-night/80">
      <nav className="container-narrow flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <IconLogo />
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="text-lg font-bold tracking-tight text-studio-ink dark:text-white">
              X Games
            </span>
            <span className="hidden text-lg font-light text-gray-400 dark:text-gray-500 sm:inline">
              Studio
            </span>
            <span className="mt-0.5 inline-flex w-fit items-center rounded-full bg-studio-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-studio-accent sm:mt-0">
              Mobile Games
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative ${navLinkClass(isActive)}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 mx-auto h-0.5 w-full rounded-full bg-studio-accent" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <a
            href="#"
            className="hidden items-center gap-2 rounded-full bg-studio-accent px-4 py-2 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:bg-studio-accent-hover hover:shadow-lg sm:inline-flex"
          >
            <IconDownload />
            Press Kit
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-studio-ink md:hidden dark:text-white"
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden dark:border-gray-800 dark:bg-studio-night">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-studio-accent/10 text-studio-accent'
                        : 'text-gray-600 hover:bg-studio-muted hover:text-studio-accent dark:text-gray-300 dark:hover:bg-studio-card dark:hover:text-studio-accent'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="#"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-full bg-studio-accent px-4 py-2.5 text-sm font-semibold text-white"
              >
                <IconDownload />
                Press Kit
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
