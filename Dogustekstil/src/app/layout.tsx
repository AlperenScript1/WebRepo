import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

export const metadata: Metadata = {
  title: 'Doğuş Tekstil — Ankara Profesyonel Tekstil Baskı Hizmetleri',
  description: 'Ankara\'da DTF, reflektör, flex-flok ve serigrafi baskı hizmetleri. Firma logolu toplu üretim, personel giyim çözümleri. +90 541 198 20 04',
  keywords: 'DTF baskı Ankara, tekstil baskı, iş yelegi, firma logolu üretim, reflektör baskı, serigrafi',
  openGraph: {
    title: 'Doğuş Tekstil — Ankara Tekstil Baskı',
    description: 'Profesyonel tekstil baskı çözümleri',
    locale: 'tr_TR',
    type: 'website',
    images: [{ url: '/logo.png', alt: 'Doğuş Tekstil Logo' }],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('dogus-theme');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
