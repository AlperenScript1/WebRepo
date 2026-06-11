'use client'

import { useState } from 'react'
import {
  Shirt, ShieldCheck, Wind, Snowflake, HardHat, ChefHat, Shield, Building2, Ruler, Palette, type LucideIcon,
} from 'lucide-react'
import { products } from '@/data/products'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'

const filters = ['Tümü', 'Logo Baskılı', 'İş Güvenliği', 'Toplu Üretim', 'Dayanıklı', 'Premium']

const iconMap: Record<string, LucideIcon> = {
  Shirt, ShieldCheck, Wind, Snowflake, HardHat, ChefHat, Shield, Building2, Ruler, Palette,
}

export function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState('Tümü')
  const filteredProducts = activeFilter === 'Tümü'
    ? products
    : products.filter((product) => product.tags.includes(activeFilter))

  return (
    <section id="urunler" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <SectionHeader
          eyebrow="Ürünlerimiz"
          title="Kurumsal Giyim Çözümleri"
          subtitle="Firmanıza özel logo baskılı iş kıyafetleri ve personel giyim ürünleri. Toplu siparişlerde özel fiyat avantajı."
        />
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button key={filter} type="button" onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-sm font-body font-500 transition-all duration-200 border ${
                activeFilter === filter
                  ? 'bg-brand-red text-white border-brand-red'
                  : 'bg-brand-white text-brand-muted border-brand-smoke hover:border-brand-red hover:text-brand-black'
              }`}>
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const Icon = iconMap[product.icon] ?? Shirt
            return (
              <article key={product.id} className="card-base flex flex-col gap-4 cursor-default group">
                <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                  <Icon size={28} className="text-brand-red" />
                </div>
                <h3 className="font-display font-700 text-xl text-brand-black uppercase">{product.name}</h3>
                <p className="text-brand-muted font-body text-sm leading-relaxed flex-1">{product.description}</p>
                <div className="border-t border-brand-smoke pt-4 flex flex-wrap gap-2">
                  {product.tags.map((tag) => <Badge key={tag} variant="dark">{tag}</Badge>)}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
