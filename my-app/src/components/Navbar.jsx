import Link from "next/link";
import React from "react";

export default function Navbar() {
    const links = [
        {title: "About", path: "/about"},
        {title: "Blog", path: "/blog"},
        {title: "Contacts", path: "/contacts"},
        {title: "Portfolio", path: "/portfolio"},
        {title: "Services", path: "/services"},
    ]
  return (
    <nav className="bg-teal-800 py-4 px-6 flex justify-between items-center text-white">
      <h6 className="text-3xl">Next <span className="text-cyan-300">Hero</span></h6>
      <ul className="flex justify-between items-center space-x-4">
        {
            links?.map((link)=><Link key={link.path} href={link.path}>{link.title}</Link>)
        }
      </ul>
    </nav>
  );
}
