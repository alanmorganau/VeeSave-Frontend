"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <header
      className="w-full sticky top-0 z-50 bg-black border-b border-transparent flex justify-between items-center px-7 py-2.5"
    >
      {/* LEFT LOGO */}
      <button
        onClick={() => (window.location.href = "/")}
        className="flex items-center space-x-3"
      >
        <div
          className="flex items-center justify-center rounded-full bg-yellow-500"
          style={{ width: 52, height: 52 }}
        >
          <Image
            src="/VeeSaveLogo.png"
            alt="VeeSave Logo"
            width={44}
            height={44}
            priority
          />
        </div>
      </button>

      {/* CENTER TITLE */}
      <div className="absolute left-0 right-0 text-center select-none pointer-events-none">
        <span className="text-white text-2xl font-semibold">
          Welcome to <span className="text-yellow-500">VeeSave</span>
        </span>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center space-x-5">

        {/* Register | Login */}
        <div className="flex items-center space-x-2 text-[0.80rem] font-normal">
          <Link
            href="/register"
            className="text-white hover:text-yellow-500 transition-colors"
          >
            Register
          </Link>

          <span className="text-white">|</span>

          <Link
            href="/login"
            className="text-white hover:text-yellow-500 transition-colors"
          >
            Login
          </Link>
        </div>

        {/* Profile Avatar */}
        <button
          onClick={() => (window.location.href = "/profile")}
          className="rounded-full bg-yellow-500 flex items-center justify-center transition-all hover:scale-105"
          style={{ width: 52, height: 52 }}
        >
          <Image
            src="/VeeSaveDefaultAvatar.png"
            alt="Profile"
            width={30}
            height={30}
          />
        </button>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className={`rounded-full flex items-center justify-center transition-all hover:border-yellow-500 hover:border ${
            open ? "border border-yellow-500" : "border border-transparent"
          }`}
          style={{ width: 52, height: 52 }}
        >
          <Image
            src="/VeeSaveMenuIcon.png"
            alt="Menu"
            width={38}
            height={38}
          />
        </button>
      </div>

      {/* DROPDOWN MENU */}
      {open && (
        <div
          onMouseLeave={closeMenu}
          className="absolute top-full right-6 mt-2 w-56 bg-black border border-yellow-500 rounded-lg shadow-lg py-2"
        >
          <Link
            href="/"
            onClick={closeMenu}
            className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition"
          >
            Home
          </Link>

          <Link
            href="/dashboard"
            onClick={closeMenu}
            className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition"
          >
            Dashboard
          </Link>

          <Link
            href="/trips"
            onClick={closeMenu}
            className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition"
          >
            Trips
          </Link>

          <Link
            href="/special-deals"
            onClick={closeMenu}
            className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition"
          >
            Special Deals
          </Link>

          <Link
            href="/settings"
            onClick={closeMenu}
            className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition"
          >
            Settings
          </Link>

          <Link
            href="/help"
            onClick={closeMenu}
            className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition"
          >
            Help
          </Link>
        </div>
      )}
    </header>
  );
}
