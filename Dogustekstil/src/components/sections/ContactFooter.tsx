'use client'

import { useState } from 'react'
import { Phone, MapPin, Copy } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { Logo } from '@/components/ui/Logo'

interface InstagramIconProps {
  size?: number
  className?: string
}

function InstagramIcon({ size = 24, className = '' }: InstagramIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const PHONE_NUMBER = '05411982004'
const PHONE_DISPLAY = '+90 541 198 20 04'
const INSTAGRAM_URL = 'https://www.instagram.com/dogustekstil5?igsh=M2cwanJ1dGZnZGgx'
const ADDRESS = 'Ağaç İşleri Sanayi Sitesi 21. Cadde 1358. Sokak 1/1 Ankara'
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&hl=tr&z=16&output=embed`
const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`

export function ContactFooter() {
  const [copied, setCopied] = useState(false)

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_NUMBER)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <footer id="iletisim" className="bg-brand-dark border-t border-brand-smoke">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          eyebrow="İletişim"
          title="Bizimle İletişime Geçin"
          subtitle="Teklif almak veya ürünlerimiz hakkında bilgi edinmek için bize ulaşın."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="card-base flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Phone size={22} className="text-brand-red" />
              <h3 className="font-display font-700 text-lg uppercase text-brand-black">Telefon</h3>
            </div>
            <div className="flex items-center justify-between gap-2">
              <a href="tel:+905411982004" className="text-brand-light font-body text-lg hover:text-brand-red transition-colors">
                {PHONE_DISPLAY}
              </a>
              <button type="button" onClick={handleCopyPhone}
                className="relative p-2 rounded-lg text-brand-muted hover:text-brand-black hover:bg-brand-gray-m transition-colors"
                aria-label="Telefon numarasını kopyala">
                <Copy size={18} />
                {copied && (
                  <span className="absolute -top-8 right-0 bg-brand-red text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Kopyalandı!
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="card-base flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <MapPin size={22} className="text-brand-red" />
              <h3 className="font-display font-700 text-lg uppercase text-brand-black">Adres</h3>
            </div>
            <a href={MAP_LINK_URL} target="_blank" rel="noopener noreferrer"
              className="text-brand-muted font-body text-sm leading-relaxed hover:text-brand-red transition-colors">
              {ADDRESS}
            </a>
            <iframe
              title="Doğuş Tekstil Konum"
              src={MAP_EMBED_URL}
              className="rounded-xl h-48 w-full border border-brand-smoke"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="card-base flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <InstagramIcon size={22} className="text-brand-red" />
              <h3 className="font-display font-700 text-lg uppercase text-brand-black">Instagram</h3>
            </div>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
              className="text-brand-light font-body hover:text-brand-red transition-colors flex items-center gap-2">
              <InstagramIcon size={18} />
              @dogustekstil5
            </a>
          </div>
          <div className="card-base flex flex-col gap-4">
            <h3 className="font-display font-700 text-lg uppercase text-brand-black">WhatsApp</h3>
            <p className="text-brand-muted font-body text-sm">Hızlı teklif ve bilgi için WhatsApp üzerinden bize yazın.</p>
            <WhatsAppButton label="Şimdi Yaz" size="lg" className="w-full justify-center" />
          </div>
        </div>
      </div>
      <div className="border-t border-brand-smoke py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          <Logo size="sm" />
          <p className="text-brand-muted font-body text-sm text-center">
            © 2026 Doğuş Tekstil · Tüm Hakları Saklıdır
          </p>
          <p className="text-brand-muted font-body text-xs text-center">Ankara | Türkiye Geneli Teslimat</p>
        </div>
      </div>
    </footer>
  )
}
