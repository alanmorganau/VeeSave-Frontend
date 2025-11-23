"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", href: "#" },
  { label: "Trips", href: "#" },
  { label: "Fuel", href: "#" },
  { label: "Maintenance", href: "#" },
  { label: "Insurance", href: "#" },
  { label: "Tolls", href: "#" },
  { label: "Reports", href: "#" },
  { label: "Settings", href: "#" },
  { label: "Help", href: "#" }
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-black/90 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        
        {/* Left: Logo + brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#f7b500] shadow-md sm:h-12 sm:w-12">
            <Image
              src="/VeeSaveLogo.png"
              alt="VeeSave"
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>

          <div className="leading-tight">
            <span className="block text-base font-semibold tracking-wide text-white">
              VeeSave
            </span>
            <span className="block text-sm text-slate-300">
              Drive Smart | Save Smart
            </span>
          </div>
        </Link>

        {/* Center message */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform lg:block">
          <span className="text-lg font-medium text-slate-300">
            Welcome to{" "}
            <span className="font-semibold text-[#f7b500]">
              VeeSave
            </span>
          </span>
        </div>

        {/* Right: Register/Login + Profile + Hamburger */}
        <div className="flex items-center gap-4">

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/register"
              className="rounded-full border border-slate-700 px-4 py-1.5 text-xs font-medium text-slate-200 transition hover:border-[#f7b500] hover:text-[#f7b500]"
            >
              Register
            </Link>
            <Link
              href="/login"
              className="rounded-full bg-[#f7b500] px-4 py-1.5 text-xs font-semibold text-black shadow-sm transition hover:bg-amber-400"
            >
              Login
            </Link>
          </div>

          {/* Profile Avatar */}
          <Link
            href="/profile"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7b500] shadow-sm translate-x-[3px]"
            aria-label="User profile"
          >
            <div className="flex flex-col items-center">
              <span className="mb-[3px] h-3 w-3 rounded-full bg-black" />
              <span className="h-4 w-5 rounded-full bg-black" />
            </div>
          </Link>

          {/* Hamburger — border only on hover */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-16 w-16 items-center justify-center rounded-full border border-transparent bg-black shadow-sm transition hover:border-[#f7b500]"
          >
            <div className="relative h-9 w-9">
              <Image
                src="/VeeSaveMenuIcon.png"
                alt="Menu"
                fill
                sizes="36px"
                className="object-contain"
              />
            </div>
          </button>
        </div>

        {/* Slide-down menu — FULL MENU RESTORED */}
        {menuOpen && (
          <div className="absolute right-4 top-[100%] mt-2 rounded-lg border border-[#f7b500] bg-black px-4 py-3 text-sm text-slate-100 shadow-xl min-w-max">
            <nav className="flex flex-col gap-1">

              {/* Primary nav items */}
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-2 py-1.5 transition hover:bg-slate-900 hover:text-[#f7b500]"
                >
                  {item.label}
                </Link>
              ))}

              {/* Divider */}
              <div className="my-2 h-px bg-slate-800" />

              {/* Auth + Profile */}
              <Link
                href="/register"
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-1.5 transition hover:bg-slate-900 hover:text-[#f7b500]"
              >
                Register
              </Link>
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-1.5 transition hover:bg-slate-900 hover:text-[#f7b500]"
              >
                Login
              </Link>
              <Link
                href="/profile"
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-1.5 transition hover:bg-slate-900 hover:text-[#f7b500]"
              >
                Profile
              </Link>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
}