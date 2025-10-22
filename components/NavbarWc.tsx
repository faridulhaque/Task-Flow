"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavbarWc() {
  const pathname = usePathname();
  return (
    <div className="h-20 shadow-2xl bg-gray-700 text-white flex items-center justify-between px-5">
      <div>Logo</div>
      <div>
        {pathname === "/welcome" && (
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-lg transition">
            <Link href="/entry">Sign In</Link>
          </button>
        )}
      </div>
    </div>
  );
}

export default NavbarWc;
