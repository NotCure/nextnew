"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const ActionButtons = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const isHomePage = pathname === "/";

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

  const buttonClassBase =
    "select-none rounded-lg border py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";

  const buttonClassHomePage =
    "text-white border-white dark:text-black dark:border-black       md:dark:text-white md:dark:border-white md:text-white md:border-white";
  const buttonClassOtherPage =
    "text-white dark:text-black border-white dark:border-black";

  const buttonClass = isHomePage ? buttonClassHomePage : buttonClassOtherPage;

  return (
    <div className="flex items-center space-x-4">
      {user ? (
        <button
          onClick={logout}
          className={`${buttonClassBase} ${buttonClass}`}
        >
          Logout
        </button>
      ) : (
        <Link href="/Login">
          <button className={`${buttonClassBase} ${buttonClass}`}>Login</button>
        </Link>
      )}
      <button
        onClick={toggleTheme}
        className={`${buttonClassBase} ${buttonClass}`}
      >
        {theme === "light" ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default ActionButtons;
