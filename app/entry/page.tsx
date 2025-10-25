import AddTaskForm from "@/components/AddTaskForm";
import Navbar from "@/components/Navbar";
import NavbarWc from "@/components/NavbarWc";
import RequireUser from "@/components/RequireUser";
import React from "react";

function page() {
  return (
    <RequireUser>
      <div className="min-h-screen bg-gray-800 text-white flex flex-col">
        <Navbar></Navbar>
        <AddTaskForm></AddTaskForm>
      </div>
    </RequireUser>
  );
}

export default page;
