"use client";

import { useState } from "react";
import MyNavLink from "./MyNavLink";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data, isPending } = authClient.useSession();

  const user = data?.user;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <>
      <li>
        <MyNavLink href={"/"}>Home</MyNavLink>
      </li>
      <li>
        <MyNavLink href={"/all-tiles"}>All Tiles</MyNavLink>
      </li>
      <li>
        <MyNavLink href={"/my-profile"}>My Profile</MyNavLink>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 border-b backdrop-blur-2xl">
      <header className="max-w-310 mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div>
            <Link href={"/"}>
              <h2 className="font-bold text-xl md:text-2xl text-[#0b0031]">
                <span className="text-[#FF653F]">Tiles</span> Gallery
              </h2>
            </Link>
          </div>
        </div>
        <ul className="hidden items-center gap-5 md:flex">{links}</ul>

        <div>
          {isPending ? (
            <p className="text-[12px]">Loading...</p>
          ) : user ? (
            <div className="flex items-center gap-2">
              <Avatar className="w-9 h-9">
                <Avatar.Image
                  alt={user?.name}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button
                onClick={async () => await authClient.signOut()}
                className="bg-[#FF653F] md:font-semibold px-3 py-.5  md:px-4 md:py-5"
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <Link href={"/signin"}>
              <Button className="bg-[#FF653F] md:font-semibold px-3 py-.5  md:px-4 md:py-5">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-3 p-4">{links}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
