"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link"; // Import the Link component from next/link
import ActionButtons from "../../navbar/ActionButtons";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userJson = window.localStorage.getItem("user");
    if (userJson) {
      setUser(JSON.parse(userJson));
    }

    // Handle body class for no-scroll
    const body = document.body;
    if (isOpen) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }

    // Clean up function
    return () => {
      body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const isLoggedIn = !!user;
  const isAdmin = user && user.isAdmin;
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 h-full z-40 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out bg-black dark:bg-white shadow-lg w-full`}
    >
      <div className="pt-28 pl-10 text-white dark:text-black">
        <h1 className="text-2xl font-bold">MAINMENU</h1>
      </div>
      <div className="text-white text-lg flex flex-col pt-8 pl-16 font-semibold dark:text-black">
        <Link href="/">
          <h1>Home</h1>
        </Link>
        <hr className="my-3 h-0.5 rounded-3xl border-t-0 bg-zinc-800 " />
        <Link href="/AboutUs">
          <h1>About Us</h1>
        </Link>
        <hr className="my-3 h-0.5 rounded-3xl border-t-0 bg-zinc-800 " />
        <Link href="/Services">
          <h1>Services</h1>
        </Link>
        <hr className="my-3 h-0.5 rounded-3xl border-t-0 bg-zinc-800 " />
        <Link href="/News">
          <h1>News</h1>
        </Link>
        <hr className="my-3 h-0.5 rounded-3xl border-t-0 bg-zinc-800 " />
        <Link href="/sitemap">
          <h1>Sitemap</h1>
        </Link>
        <hr className="my-3 h-0.5 rounded-3xl border-t-0 bg-zinc-800 " />
        <Link href="/contact">
          <h1>Contact Support</h1>
        </Link>
        <hr className="my-3 h-0.5 rounded-3xl border-t-0 bg-zinc-800 " />
        <Link href="/FAQ">
          <h1>FAQ</h1>
        </Link>
        <hr className="my-3 h-0.5 rounded-3xl border-t-0 bg-zinc-800 " />
        <Link href="/Contact">
          <h1>Contact</h1>
        </Link>

        {isLoggedIn && isAdmin && (
          <>
            <hr className="text-red-600 my-3 h-0.5 rounded-3xl border-t-0 bg-zinc-800 dark:bg-white w-80" />

            <Link href="/Admin">
              <h1>Admin</h1>
            </Link>
            <hr className="text-red-600 my-3 h-0.5 rounded-3xl border-t-0 bg-zinc-800 " />

            <Link href="/Reports">
              <h1>Reports</h1>
            </Link>
          </>
        )}

        {isLoggedIn && !isAdmin && (
          <>
            <hr className="my-3 h-0.5 rounded-3xl border-t-0 bg-zinc-800 " />

            <Link href="/Appointment">
              <h1>My Appointment</h1>
            </Link>
          </>
        )}

        {!isLoggedIn && <></>}
      </div>

      <div className="flex justify-center pt-10">
        <ActionButtons />
      </div>
    </div>
  );
};

export default Sidebar;
