"use client";
import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { usePathname } from "next/navigation";

function OnboardingForm() {
  const [viewPass, setViewPass] = useState(false);
  const pathname = usePathname();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (pathname.includes("sign-in")) {
      // call sign in function
    } else {
      // call sign up function
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-11/12 max-w-md bg-gray-700 py-10 px-6 mx-auto mt-20 rounded-lg shadow-xl space-y-6"
    >
      {pathname.includes("sign-in") ? (
        <h2 className="text-3xl font-semibold text-center mb-6">Sign In</h2>
      ) : (
        <h2 className="text-3xl font-semibold text-center mb-6">Sign Up</h2>
      )}

      <div className="w-full">
        <label className="block text-gray-300 mb-2 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-md bg-gray-600 border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-100 placeholder-gray-400 transition-all duration-200"
        />
      </div>

      <div className="w-full ">
        <label className="relative block text-gray-300 mb-2 text-sm font-medium">
          Password
          <span
            onClick={() => setViewPass(!viewPass)}
            className="absolute top-0.5 ml-2"
          >
            {!viewPass ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </span>
        </label>
        <input
          minLength={8}
          type={viewPass ? "text" : "password"}
          placeholder="Enter your password"
          className="w-full px-4 py-3 rounded-md bg-gray-600 border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-100 placeholder-gray-400 transition-all duration-200"
        />
      </div>

      {pathname.includes("sign-in") ? (
        <button
          type="submit"
          className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-md font-semibold transition-all duration-200"
        >
          Sign In
        </button>
      ) : (
        <button
          type="submit"
          className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-md font-semibold transition-all duration-200"
        >
          Sign Up
        </button>
      )}

      <p className="text-center text-sm text-gray-400 mt-4">
        {pathname.includes("sign-in")
          ? "Don’t have an account?"
          : "Already have an account?"}
        <span> </span>
        <a
          href={pathname.includes("sign-in") ? "/sign-up" : "/sign-in"}
          className="text-indigo-400 hover:text-indigo-300 underline transition-all duration-200"
        >
          {pathname.includes("sign-in") ? "Register" : "Login"}
        </a>
      </p>
    </form>
  );
}

export default OnboardingForm;
