import Navbar from '@/components/Navbar'
import React from 'react'

export default function layout({children}) {
  return (
    <div>
        <Navbar></Navbar>
        {children}
        <footer className="bg-black text-white text-center p-4">This is my footer</footer>
    </div>
  )
}
