"use client";
import { navLinks } from "@/lib/Constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

function LeftSideBar() {
  const pathName = usePathname();
  return (
    <div className="h-screen left-0 top-0 sticky p-10 flex flex-col bg-blue-2 shadow-xl max-lg:hidden">
      <Image src="/logo.png" alt="logo" width={150} height={70} />
      <div className=" flex flex-col gap-12 mt-7">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium ${
              pathName === link.url ? "text-blue-1" : "text-gray-1"
            }`}
          >
            {link.icon}
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <div className=" flex gap-4 text-body-medium items-center mt-36">
        <UserButton />
        <p>Edit Profile</p>
      </div>
    </div>
  );
}

export default LeftSideBar;
