"use client";
import React, { useState } from "react";
import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";
import Title from "@/app/_components/title/Title";
import Link from "next/link";

export default function SignUp() {
  const [formData, setFormData] = useState({
    naam: "",
    voornaam: "",
    gsmnummer: "",
    adres: "",
    geslacht: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("../api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        alert("Account created successfully!");
        setFormData({
          naam: "",
          voornaam: "",
          gsmnummer: "",
          adres: "",
          geslacht: "",
          email: "",
          password: "",
        });
      } else {
        alert("Failed to create account: " + result.error);
      }
    } catch (error) {
      alert("Failed to send data: " + error.message);
    }
  };

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
              <Link href="/Login" legacyBehavior>
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  Log in
                </a>
              </Link>
            </p>

            <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label className="font-medium">Naam</label>
                  <input
                    type="text"
                    name="naam"
                    required
                    className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border shadow-sm rounded-lg"
                    value={formData.naam}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="font-medium">Voornaam</label>
                  <input
                    type="text"
                    name="voornaam"
                    required
                    className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border shadow-sm rounded-lg"
                    value={formData.voornaam}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="font-medium">Gsmnummer</label>
                  <input
                    type="tel"
                    name="gsmnummer"
                    required
                    className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border shadow-sm rounded-lg"
                    value={formData.gsmnummer}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="font-medium">Adres</label>
                  <input
                    type="text"
                    name="adres"
                    required
                    className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border shadow-sm rounded-lg"
                    value={formData.adres}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="font-medium">Geslacht</label>
                  <select
                    name="geslacht"
                    required
                    className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border shadow-sm rounded-lg appearance-none"
                    style={{ background: "black", color: "white" }}
                    value={formData.geslacht}
                    onChange={handleChange}
                  >
                    <option value="">Select...</option>
                    <option value="M">Man</option>
                    <option value="V">Vrouw</option>
                  </select>
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border shadow-sm rounded-lg"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label className="font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border shadow-sm rounded-lg"
                  value={formData.password}
                  onChange={handleChange}
                />
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
