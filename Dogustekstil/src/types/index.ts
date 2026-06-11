export interface Product {
  id: string
  name: string
  description: string
  tags: string[]
  icon: string
}

export interface PrintService {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
  highlight: string
}

export interface NavLink {
  label: string
  href: string
}
