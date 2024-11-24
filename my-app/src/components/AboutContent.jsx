import React from 'react';
import Link from 'next/link'

export default function AboutContent() {
  const links = [
    {title:"History", path:"/about/history"},
    {title:"Mission", path:"/about/mission"},
    {title:"Vission", path:"/about/history/vission"}
  ]
  return (
    <div className='flex justify-center gap-3'>
      {
        links.map((link) => <Link key={link.path} href={link.path}>{link.title}</Link>)
      }
    </div>
  )
}
