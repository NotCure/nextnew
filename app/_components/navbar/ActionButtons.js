// ActionButtons.js
"use client";

import { useAuth } from "../../_context/AuthContext";

import Link from "next/link";

const ActionButtons = () => {
  let { user, logout } = useAuth();

  return (
    <div className="flex items-center space-x-4">
      {user ? (
        <button
          onClick={logout}
          className="select-none rounded-lg border border-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Logout
        </button>
      ) : (
        <Link href="/Login">
          <button className="select-none rounded-lg border border-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Login
          </button>
        </Link>
      )}
      <button className="select-none rounded-lg border border-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        English
      </button>
    </div>
  );
};

export default ActionButtons;
