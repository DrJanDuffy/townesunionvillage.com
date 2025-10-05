'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/floor-plans': {
    name: 'Floor Plans',
  },
  '/community': {
    name: 'Community',
  },
  '/quick-move-in': {
    name: 'Quick Move-In',
  },
  '/about-dr-jan': {
    name: 'About Dr. Jan',
  },
  '/home-value': {
    name: 'Home Value',
  },
  '/contact': {
    name: 'Contact',
  },
}

export function Navbar() {
  const pathname = usePathname() || '/'

  return (
    <nav className="flex items-center justify-between w-full py-4 px-4 bg-white shadow-sm">
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Townes at Union Village
        </Link>
        <div className="hidden md:flex space-x-6">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname
            return (
              <Link
                key={path}
                href={path}
                className={`transition-optimized ${
                  isActive
                    ? 'text-blue-600 font-medium border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600 hover-scale'
                }`}
              >
                {name}
              </Link>
            )
          })}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="tel:7025001955"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 hover-scale transition-optimized font-medium transform-gpu"
        >
          Call (702) 500-1955
        </a>
      </div>
    </nav>
  )
}
