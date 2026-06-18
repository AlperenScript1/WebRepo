import type { Metadata } from 'next'
import { Navbar }               from '@/components/sections/Navbar'
import { HeroSection }          from '@/components/sections/HeroSection'
import { ProductsSection }      from '@/components/sections/ProductsSection'
import { PrintServicesSection } from '@/components/sections/PrintServicesSection'
import { AboutSection }         from '@/components/sections/AboutSection'
import { ContactFooter }        from '@/components/sections/ContactFooter'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <PrintServicesSection />
        <AboutSection />
      </main>
      <ContactFooter />
    </>
  )
}
