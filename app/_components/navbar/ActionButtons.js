"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const ActionButtons = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const userJson = localStorage.getItem("user");
    if (userJson) {
      setUser(JSON.parse(userJson));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.refresh();
    router.push(`/`);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-4">
      {user ? (
        <button
          onClick={logout}
          className="select-none rounded-lg border dark:border-black dark:text-black border-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Logout
        </button>
      ) : (
        <Link href="/Login">
          <button className="select-none rounded-lg border dark:border-black dark:text-black border-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Login
          </button>
        </Link>
      )}
      <button
        onClick={toggleTheme}
        className="select-none  rounded-lg border dark:border-black dark:text-black border-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        {theme === "light" ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default ActionButtons;
