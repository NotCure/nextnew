"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const NavigationLinks = () => {
  const [user, setUser] = useState(null);
  const { theme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const userJson = localStorage.getItem("user");
    if (userJson) {
      setUser(JSON.parse(userJson));
    }
  }, []);

  const isAdmin = user && user.isAdmin;
  const isLoggedIn = !!user;
  const isHomePage = pathname === "/";

  const linkClass = `text-white ${
    !isHomePage && "dark:text-black"
  } font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`;

  const hamburgerSrc = isHomePage
    ? "/logos/HamburgerWhite.png"
    : theme === "dark"
    ? "/logos/HamburgerBlack.png"
    : "/logos/HamburgerWhite.png";

  return (
    <div className="flex items-center space-x-20">
      <Image src={hamburgerSrc} alt="Hamburger Menu" width={40} height={40} />
      {isLoggedIn && isAdmin && (
        <>
          <Link
            href="/Admin"
            className="text-red-600 font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Admin
          </Link>
          <Link
            href="/Reports"
            className="text-red-600 font-medium relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Reports
          </Link>
          <Link href="/" className={linkClass}>
            Home
          </Link>
        </>
      )}

      {isLoggedIn && !isAdmin && (
        <>
          <Link href="/Appointment" className={linkClass}>
            My Appointment
          </Link>
          <Link href="/" className={linkClass}>
            Home
          </Link>
        </>
      )}

      {!isLoggedIn && (
        <Link href="/" className={linkClass}>
          Home
        </Link>
      )}

      <Link href="/AboutUs" className={linkClass}>
        About Us
      </Link>
      <Link href="/Services" className={linkClass}>
        Services
      </Link>
      <Link href="/News" className={linkClass}>
        News
      </Link>
      <Link href="/FAQ" className={linkClass}>
        FAQ
      </Link>
      <Link href="/Contact" className={linkClass}>
        Contact
      </Link>
    </div>
  );
};

export default NavigationLinks;
