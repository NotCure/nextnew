"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavigationLinks = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userJson = localStorage.getItem("user");
    if (userJson) {
      setUser(JSON.parse(userJson));
    }
  }, []);

  const isAdmin = user && user.isAdmin;
  const isLoggedIn = !!user;

  return (
    <div className="flex items-center space-x-20">
      <Image
        src="/logos/HamburgerWhite.png"
        alt="Hamburger Menu"
        width={40}
        height={40}
        layout="fixed"
      />

      {isLoggedIn && isAdmin && (
        <>
          <Link
            href="/Admin"
            className="text-white font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Admin
          </Link>
          <Link
            href="/Reports"
            className="text-white font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Reports
          </Link>
          <Link
            href="/"
            className="text-white font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Home
          </Link>
        </>
      )}

      {isLoggedIn && !isAdmin && (
        <>
          <Link
            href="/Appointment"
            className="text-white font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            My Appointment
          </Link>
          <Link
            href="/"
            className="text-white font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Home
          </Link>
        </>
      )}

      {!isLoggedIn && (
        <Link
          href="/"
          className="text-white font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          Home
        </Link>
      )}

      <Link
        href="/AboutUs"
        className="text-white font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        About Us
      </Link>
      <Link
        href="/Services"
        className="text-white font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        Services
      </Link>
      <Link
        href="/News"
        className="text-white font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        News
      </Link>
      <Link
        href="/FAQ"
        className="text-white font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        FAQ
      </Link>
      <Link
        href="/Contact"
        className="text-white font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        Contact
      </Link>
    </div>
  );
};

export default NavigationLinks;
