'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
      <Link href="/" className="font-semibold text-gray-900 text-sm">
        Lloyd Hhannes Sanchez.
      </Link>
      <div className="flex items-center gap-6">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-sm transition-colors ${
              pathname === href
                ? 'text-primary font-medium border-b-2 border-primary pb-0.5'
                : 'text-gray-500 hover:text-gray-900'
            }`}
            style={pathname === href ? { color: '#3B3BF9', borderColor: '#3B3BF9' } : {}}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="btn-primary text-sm px-4 py-2 rounded-full"
          style={{ backgroundColor: '#3B3BF9', color: 'white' }}
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}
