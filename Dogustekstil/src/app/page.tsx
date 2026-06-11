import { Navbar }               from '@/components/sections/Navbar'
import { HeroSection }          from '@/components/sections/HeroSection'
import { ProductsSection }      from '@/components/sections/ProductsSection'
import { PrintServicesSection } from '@/components/sections/PrintServicesSection'
import { AboutSection }         from '@/components/sections/AboutSection'
import { ContactFooter }        from '@/components/sections/ContactFooter'

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
