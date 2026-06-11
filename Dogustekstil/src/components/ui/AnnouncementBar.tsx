'use client'

import { Palette } from 'lucide-react'

export function AnnouncementBar() {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('spotlight-service', { detail: 'kisisel-baski' }))
  }

  return (
    <div className="bg-brand-red text-white text-center py-2.5 px-4 text-sm font-body">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <Palette size={16} className="shrink-0 hidden sm:inline" aria-hidden />
        <span>
          <strong className="font-600">Kişiye Özel Baskı:</strong>{' '}
          Logo, yazı veya görselinizi iletin — istediğiniz tekstil ürününe profesyonel baskı uyguluyoruz.
        </span>
        <a
          href="#kisisel-baski"
          onClick={handleClick}
          className="underline underline-offset-2 font-500 hover:text-white/90 whitespace-nowrap"
        >
          Detaylı Bilgi →
        </a>
      </div>
    </div>
  )
}
