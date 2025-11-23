"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import VeeSaveLogo from "../public/VeeSaveLogo.png";
import VeeSaveMenuIcon from "../public/VeeSaveMenuIcon.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const menuItems: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Trips", href: "/trips" },
    { label: "Fuel", href: "/fuel" },
    { label: "Maintenance", href: "/maintenance" },
    { label: "Insurance", href: "/insurance" },
    { label: "Tolls", href: "/tolls" },
    { label: "Reports", href: "/reports" },
    { label: "Settings", href: "/settings" },
    { label: "Help", href: "/help" },
    { label: "Account", href: "/profile" },
  ];

  return (
    <header className="w-full bg-black text-white shadow-sm z-50 sticky top-0">
      <div
        className="mx-auto px-4 flex items-center justify-between"
        style={{ height: "72px" }}
      >
        {/* Left: Logo + wordmark */}
        <Link href="/" className="flex items-center space-x-3 cursor-pointer">
          <div className="h-16 w-16 rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden">
            <Image
              src={VeeSaveLogo}
              alt="VeeSave Logo"
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold tracking-wide">VeeSave</span>
            <span className="text-xs text-gray-300">
              Drive Smart | Save Smart
            </span>
          </div>
        </Link>

        {/* Center: Welcome text */}
        <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none">
          <span className="text-xl font-semibold">
            Welcome to <span className="text-yellow-400">VeeSave</span>
          </span>
        </div>

        {/* Right: Register / Login / Avatar / Menu */}
        <div className="flex items-center space-x-4">
          <Link
            href="/register"
            className="px-4 py-1.5 rounded-full border border-gray-400 text-white hover:bg-gray-700 transition"
          >
            Register
          </Link>

          <Link
            href="/login"
            className="px-4 py-1.5 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
          >
            Login
          </Link>

          {/* Avatar */}
          <Link href="/profile">
            <div className="h-14 w-14 rounded-full bg-yellow-400 flex items-center justify-center cursor-pointer ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="42"
                width="42"
                viewBox="0 0 24 24"
                fill="black"
              >
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>
          </Link>

          {/* Hamburger Menu */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((open) => !open)}
              className={`h-14 w-14 rounded-full flex items-center justify-center transition ${
                menuOpen
                  ? "border border-yellow-400"
                  : "hover:border hover:border-yellow-400"
              }`}
            >
              <Image
                src={VeeSaveMenuIcon}
                alt="Menu"
                className="object-contain p-1"
              />
            </button>

            {/* Dropdown */}
            <div
              className={`absolute right-0 bg-black border border-yellow-400 rounded-md shadow-lg py-2 w-max z-50 transition-all duration-300 overflow-hidden ${
                menuOpen
                  ? "opacity-100 max-h-[600px]"
                  : "opacity-0 max-h-0 pointer-events-none"
              }`}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}