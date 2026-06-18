'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Logo } from '@/components/ui/Logo'
import { AnnouncementBar } from '@/components/ui/AnnouncementBar'
import { NavLink } from '@/types'

const navLinks: NavLink[] = [
  { label: 'Ürünler',          href: '#urunler' },
  { label: 'Baskı Hizmetleri', href: '#baski-hizmetleri' },
  { label: 'Hakkımızda',       href: '#hakkimizda' },
  { label: 'İletişim',         href: '#iletisim' },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= 50)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-brand-white/95 backdrop-blur shadow-nav border-b border-brand-smoke'
      : 'bg-brand-white/80 backdrop-blur-sm'
  }`

  return (
    <header className={navClasses}>
      <AnnouncementBar />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          <a href="/" aria-label="Doğuş Tekstil — Ana Sayfa" className="flex items-center shrink-0">
            <Logo size="sm" priority />
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-brand-muted hover:text-brand-red transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <ThemeToggle />

            <div className="hidden lg:flex items-center gap-3">
              <Button variant="primary" size="sm" href="#iletisim">Teklif Al</Button>
              <WhatsAppButton size="sm" />
            </div>

            <div className="hidden md:flex lg:hidden">
              <WhatsAppButton size="sm" />
            </div>

            <button
              type="button"
              onClick={toggleMenu}
              className="lg:hidden p-2 text-brand-black hover:text-brand-red transition-colors"
              aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col gap-4 pt-2 border-t border-brand-smoke">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}
                className="font-body text-brand-muted hover:text-brand-red transition-colors duration-200 py-1">
                {link.label}
              </a>
            ))}
            <Button variant="primary" size="sm" href="#iletisim" onClick={closeMenu}>Teklif Al</Button>
            <WhatsAppButton size="sm" className="w-full justify-center" />
          </div>
        </div>
      </nav>
    </header>
  )
}
