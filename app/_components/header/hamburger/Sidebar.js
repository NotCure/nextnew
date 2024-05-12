"use client";
import React from "react";
import Link from "next/link"; // Import the Link component from next/link
import ActionButtons from "../../navbar/ActionButtons";
import { useAuth } from "../../../_context/AuthContext";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  let { user, logout } = useAuth();

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 h-full z-10 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out bg-black shadow-lg w-full`}
    >
      <div className="pt-28 pl-10 text-white">
        <h1 className="text-2xl font-bold">MAINMENU</h1>
      </div>
      <div className="text-white text-lg flex flex-col pt-8 pl-16 font-semibold">
        <Link href="/">
          <h1>Home</h1>
        </Link>
        <hr className="my-3 h-0.5 rounded-3xl border-t-0 bg-zinc-800 dark:bg-white w-80" />
        <Link href="/AboutUs">
          <h1>About Us</h1>
        </Link>
        <hr className="my-3 h-0.5 rounded-3xl border-t-0 bg-zinc-800 dark:bg-white w-80" />
        <Link href="/Services">
          <h1>Services</h1>
        </Link>
        <hr className="my-3 h-0.5 rounded-3xl border-t-0 bg-zinc-800 dark:bg-white w-80" />
        <Link href="/News">
          <h1>News</h1>
        </Link>
        <hr className="my-3 h-0.5 rounded-3xl border-t-0 bg-zinc-800 dark:bg-white w-80" />
        <Link href="/sitemap">
          <h1>Sitemap</h1>
        </Link>
        <hr className="my-3 h-0.5 rounded-3xl border-t-0 bg-zinc-800 dark:bg-white w-80" />
        <Link href="/contact">
          <h1>Contact Support</h1>
        </Link>
        <hr className="my-3 h-0.5 rounded-3xl border-t-0 bg-zinc-800 dark:bg-white w-80" />
        <Link href="/FAQ">
          <h1>FAQ</h1>
        </Link>
        <hr className="my-3 h-0.5 rounded-3xl border-t-0 bg-zinc-800 dark:bg-white w-80" />
        <Link href="/Contact">
          <h1>Contact</h1>
        </Link>
        <hr className="my-3 h-0.5 rounded-3xl border-t-0 bg-zinc-800 dark:bg-white w-80" />
        {user ? (
          <Link href="/FAQ">
            <h1>My Appointment</h1>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex justify-center pt-10">
        <ActionButtons />
      </div>
    </div>
  );
};

export default Sidebar;
