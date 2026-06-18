import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#e31e24',
    lang: 'tr',
    icons: [
      {
        src: '/jlogo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
