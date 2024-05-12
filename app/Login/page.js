"use client";

import React, { useState } from "react";
import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";
import Title from "@/app/_components/title/Title";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../_context/AuthContext";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("../api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const result = await response.json();
      if (result.success) {
        login(result.user);
        router.push("/");
      } else {
        setError(result.error || "Failed to login");
      }
    } catch (error) {
      setError("Failed to send data: " + error.message);
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <Title title="Login" />

      <main className="w-full h-screen flex flex-col items-center mt-16 px-4">
        <div className="max-w-sm w-full text-white">
          <h1
            className={`flex justify-center text-red-500 ${
              error ? "visible" : "invisible"
            }`}
          >
            {error || "Placeholder to maintain layout"}
          </h1>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={credentials.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                name="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium border border-white rounded-2xl duration-150"
            >
              Sign in
            </button>
          </form>
          <div className="text-center pt-4">
            <Link href="/SignUp" legacyBehavior>
              <a className="hover:opacity-50 transition-all">Sign Up</a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
