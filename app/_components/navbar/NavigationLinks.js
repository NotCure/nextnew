"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../../_context/AuthContext"; // import useAuth

const NavigationLinks = () => {
  const { user } = useAuth();

  return (
    <div className="flex items-center space-x-20">
      <Image
        src="/logos/HamburgerWhite.png"
        alt="HamburgerMenu"
        width={40}
        height={40}
        layout="fixed"
      />

      {user ? (
        <>
          <Link
            href="/AboutUs"
            className="text-white  font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            My Profile
          </Link>
          <Link
            href="/"
            className="actief text-white  font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Home
          </Link>
        </>
      ) : (
        <>
          <Link
            href="/"
            className="actief text-white  font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Home
          </Link>
        </>
      )}

      <Link
        href="/AboutUs"
        className="text-white  font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        About Us
      </Link>
      <Link
        href="/Services"
        className="text-white  font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        Services
      </Link>
      <Link
        href="/News"
        className="text-white  font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        News
      </Link>
      <Link
        href="/FAQ"
        className="text-white  font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        FAQ
      </Link>
    </div>
  );
};

export default NavigationLinks;
