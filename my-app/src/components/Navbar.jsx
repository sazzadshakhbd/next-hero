'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { Children } from "react";
export default function Navbar() {
    const links = [
        {title: "About", path: "/about"},
        {title: "Blogs", path: "/blogs"},
        {title: "Contacts", path: "/contacts"},
        {title: "Portfolio", path: "/portfolio"},
        {title: "Services", path: "/services"},
        {title: "Categories", path: "/categories"},
        {title: "Special Blogs", path: "/blogs/specialblogs"},
    ]
    const pathName = usePathname();
    const router = useRouter();

    const handler = () => {
        router.push('/login')
    }
    if(pathName.includes('dashboard'))
        return(
        <div className="bg-red-400">Dashboard Layout</div>
    )
  return (
    <nav className="bg-teal-800 py-4 px-6 flex justify-between items-center text-white">
      <h6 className="text-3xl">Next <span className="text-cyan-300">Hero</span></h6>
      <ul className="flex justify-between items-center space-x-4">
        {
            links?.map((link)=><Link className={`${pathName === link.path && "bg-white text-black px-3"}`} key={link.path} href={link.path}>{link.title}</Link>)
        }
      </ul>
      <button onClick={handler} className="bg-white text-black px-3 py-2">Login</button>
    </nav>
  );
}
