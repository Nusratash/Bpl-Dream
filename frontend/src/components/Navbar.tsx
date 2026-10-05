"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTeam } from "../context/TeamContext";

const links = [
  { label: "Home", href: "/" },
  { label: "Fixture", href: "/fixture" },
  { label: "Teams", href: "/teams" },
  { label: "Schedules", href: "/schedules" },
];

export default function Navbar() {
  const { coins } = useTeam();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href: string) =>
    pathname === href ? "font-bold text-black" : "text-black/70 hover:text-black";

  return (
    <nav className="bg-white text-black/90">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4">
        <Link href="/">
          <Image src="/Group 1.png" alt="Logo" width={60} height={60} />
        </Link>

        <div className="hidden gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg border px-4 py-2">{coins} Coin</div>
          <button
            className="rounded-lg border px-3 py-2 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      
      {open && (
        <div className="flex flex-col gap-3 border-t px-4 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={linkClass(l.href)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
