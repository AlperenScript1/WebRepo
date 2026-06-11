'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  Printer, Factory, Flashlight, Layers, Grid, Palette, Ruler, type LucideIcon,
} from 'lucide-react'
import { printServices } from '@/data/services'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'

const SPOTLIGHT_ID = 'kisisel-baski'
const SPOTLIGHT_HASH = `#${SPOTLIGHT_ID}`

const iconMap: Record<string, LucideIcon> = {
  Printer, Factory, Flashlight, Layers, Grid, Palette, Ruler,
}

export function PrintServicesSection() {
  const [spotlight, setSpotlight] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const playSpotlight = useCallback(() => {
    clearTimeout(timeoutRef.current)
    setSpotlight(false)
    requestAnimationFrame(() => {
      setSpotlight(true)
      timeoutRef.current = setTimeout(() => setSpotlight(false), 1000)
    })
  }, [])

  useEffect(() => {
    const triggerIfTarget = () => {
      const hash = window.location.hash
      if (hash !== SPOTLIGHT_HASH && hash !== '#baski-hizmetleri') return
      setTimeout(playSpotlight, 350)
    }

    const handleSpotlightEvent = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail
      if (detail === SPOTLIGHT_ID) setTimeout(playSpotlight, 350)
    }

    triggerIfTarget()
    window.addEventListener('hashchange', triggerIfTarget)
    window.addEventListener('spotlight-service', handleSpotlightEvent)

    return () => {
      window.removeEventListener('hashchange', triggerIfTarget)
      window.removeEventListener('spotlight-service', handleSpotlightEvent)
      clearTimeout(timeoutRef.current)
    }
  }, [playSpotlight])

  return (
    <section id="baski-hizmetleri" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <SectionHeader
          eyebrow="Baskı Hizmetleri"
          title="Profesyonel Baskı Teknolojileri"
          subtitle="DTF, reflektör, flex-flok ve serigrafi baskı seçenekleriyle her ihtiyaca uygun çözümler sunuyoruz."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {printServices.map((service) => {
            const Icon = iconMap[service.icon] ?? Printer
            const isSpotlight = service.id === SPOTLIGHT_ID

            return (
              <article
                key={service.id}
                id={service.id}
                className={`card-base flex flex-col gap-4 border-l-2 border-brand-red scroll-mt-36 ${
                  isSpotlight && spotlight ? 'service-card-spotlight !border-brand-red' : ''
                }`}
              >
                <Badge variant="red">{service.highlight}</Badge>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center shrink-0">
                    <Icon size={24} className="text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-display font-700 text-xl text-brand-black uppercase">{service.title}</h3>
                    <p className="text-brand-muted font-body text-sm mt-1">{service.subtitle}</p>
                  </div>
                </div>
                <div className="border-t border-brand-smoke pt-4">
                  <p className="text-brand-muted font-body text-sm leading-relaxed">{service.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
