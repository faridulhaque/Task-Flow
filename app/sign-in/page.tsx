import NavbarWc from "@/components/NavbarWc";
import OnboardingForm from "@/components/OnboardingForm";
import React from "react";

function page() {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col">
      <NavbarWc />
      <OnboardingForm></OnboardingForm>
    </div>
  );
}

export default page;
