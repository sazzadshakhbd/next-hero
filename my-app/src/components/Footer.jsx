'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Footer() {
const pathName = usePathname();
if(pathName.includes('dashboard'))
    return(
        <div className='bg-yellow-50 pa-3 text-center'>Footer</div>
    )
  return (
    <div>
        <footer className="bg-black text-white text-center p-4">This is my footer</footer>
    </div>
  )
}
