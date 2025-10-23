"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Navbar() {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("user");
    router.push("/welcome");
  };
  return (
    <div className="h-20 shadow-2xl bg-gray-700 text-white flex items-center justify-between px-5">
      <div>
        <Link className="text-2xl text-shadow-md" href="/">
          TASK FLOW
        </Link>
      </div>
      <div>
        <button
          onClick={logout}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-lg transition cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
