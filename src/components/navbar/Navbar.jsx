import Link from 'next/link'
import React from 'react'

function Navbar() {
  const links = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'Portfolio',
      url: '/portfolio',
    },
    {
      id: 3,
      title: 'Blog',
      url: '/blog',
    },
    {
      id: 4,
      title: 'About',
      url: '/about',
    },
    {
      id: 5,
      title: 'Contact',
      url: '/contact',
    },
    {
      id: 6,
      title: 'Dashboard',
      url: '/dashboard',
    },
  ]

  return (
    <div className='h-[100px] flex justify-between items-center'>
      <Link href="/" className='font-bold text-2xl'>Next App</Link>
      <div className='flex items-center justify-between gap-5 mr-5'>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
