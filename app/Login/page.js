import React from "react";
import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";
import Title from "@/app/_components/title/Title";
import Link from "next/link"; // Import Link from next/link

export default function Login() {
  return (
    <>
      <Header />
      <Navbar />
      <Title title="Login" />

      <main className="w-full h-screen flex flex-col items-center mt-16 px-4">
        <div className="max-w-sm w-full text-white">
          <div className="text-center">
            <div className="mt-2 space-y-2">
              <h3 className="text-white text-2xl font-bold sm:text-3xl">
                Log in to your account
              </h3>
              <p className="opacity-50">
                Don't have an account?{" "}
                <Link href="/SignUp">
                  {" "}
                  {/* Update the href to point to your signup page route */}
                  <a className="font-medium text-white opacity-70 transition-all hover:opacity-100">
                    Sign up
                  </a>
                </Link>
              </p>
            </div>
          </div>
          <form className="mt-8 space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium border border-white rounded-2xl duration-150">
              Sign in
            </button>
            <div className="text-center">
              <Link href="/forgot-password">
                {" "}
                {/* Suppose you also use Link for forgot password */}
                <a className="hover:opacity-50 transition-all">
                  Forgot password?
                </a>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
