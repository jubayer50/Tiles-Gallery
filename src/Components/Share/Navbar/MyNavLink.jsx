"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink = ({ href, children, className }) => {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`font-medium ${pathName === href ? "text-[#FF653F] font-bold" : ""} ${className}`}
    >
      {children}
    </Link>
  );
};

export default MyNavLink;
