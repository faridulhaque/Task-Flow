import NavbarWc from "@/components/NavbarWc";
import { Typewriter } from "nextjs-simple-typewriter";
import React from "react";

function page() {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col">
      <NavbarWc />

      <main className="flex flex-col justify-center items-center flex-grow text-center px-4">
        <h1 className="text-5xl md:text-6xl uppercase font-bold pt-20">
          Welcome to <span className="text-indigo-500">Task Flow</span>
        </h1>

        <h2 className="mt-6 text-2xl md:text-3xl font-medium text-gray-200">
          <Typewriter
            words={[
              "Stay focused and let your tasks flow.",
              "Plan smart. Work smooth.",
              "Achieve more, stress less.",
            ]}
            loop={0} // infinite
            cursor
            cursorStyle="|"
            cursorBlinking
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <button className="mt-10 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200">
          Get Started
        </button>
      </main>
    </div>
  );
}

export default page;
