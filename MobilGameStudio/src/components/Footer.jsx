import { IconApple, IconGooglePlay } from './icons/Icons';

const footerLinks = [
  { label: 'Gizlilik Politikası', href: '#' },
  { label: 'Kullanım Koşulları', href: '#' },
  { label: 'Çerez Politikası', href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white py-12 dark:border-gray-800 dark:bg-studio-night">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-studio-ink dark:text-white">
              X Games Studio
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              © {year} Tüm hakları saklıdır.
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-gray-500 transition-colors duration-300 hover:text-studio-accent dark:text-gray-400 dark:hover:text-studio-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 opacity-60">
            <IconApple className="w-6 h-6 text-studio-ink dark:text-gray-400" />
            <IconGooglePlay className="h-6 w-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
