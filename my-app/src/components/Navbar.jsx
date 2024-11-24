import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-teal-800 py-4 px-6 flex justify-between items-center text-white">
      <h6 className="text-3xl">Next <span className="text-cyan-300">Hero</span></h6>
      <ul className="flex justify-between items-center space-x-4">
        <li>
            <Link href={'/about'} target="_blank">About</Link>
        </li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
