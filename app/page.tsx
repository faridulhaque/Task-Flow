import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import RequireUser from "@/components/RequireUser";
import React from "react";

function page() {
  return (
    <RequireUser>
      <div className="min-h-screen bg-gray-800 text-white flex flex-col">
        <Navbar></Navbar>
        <Home></Home>
      </div>
    </RequireUser>
  );
}

export default page;
