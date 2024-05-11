import React from "react";
import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";
import Title from "@/app/_components/title/Title";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Header />
      <Navbar />
      <Title title="Sign Up" />

      <main className="flex justify-center pt-14">
        <div className="flex justify-center h-screen">
          <div className="max-w-2xl space-y-8 px-4 bg-black text-white sm:px-6">
            <h3 className="text-2xl font-bold sm:text-3xl">Sign up</h3>
            <p>
              Already have an account?{" "}
              <Link href="/login" legacyBehavior>
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  Log in
                </a>
              </Link>
            </p>

            <form className="grid grid-cols-2 gap-4">
              <div className="space-y-5 col-span-1">
                <div>
                  <label className="font-medium">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Phone</label>
                  <input
                    type="tel"
                    className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Age</label>
                  <input
                    type="number"
                    className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div className="space-y-5 col-span-1">
                <div>
                  <label className="font-medium">Password</label>
                  <input
                    type="password"
                    required
                    className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Confirm Password</label>
                  <input
                    type="password"
                    required
                    className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Country</label>
                  <input
                    type="text"
                    className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">City</label>
                  <input
                    type="text"
                    className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <button className="w-full border border-white px-4 py-2 text-white font-medium rounded-lg duration-150 col-span-2">
                Create account
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
