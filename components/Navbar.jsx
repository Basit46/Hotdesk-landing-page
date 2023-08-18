"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import Menu from "./Menu";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <header className="fixed top-0 left-0 z-[999] bg-white w-screen h-[92px] px-[26.5px] flex items-center justify-between xl:justify-start xl:gap-[72px]">
        <Link href="/">
          <Image src="/logo.svg" width="159" height="21" alt="Hotdesk logo" />
        </Link>
        <nav className="flex-1 hidden xl:flex gap-[36px]">
          <Link href="/">Membership</Link>
          <Link href="/">Locations</Link>
          <Link href="/">Facilities</Link>
          <Link href="/">News</Link>
          <Link href="/">Contact</Link>
        </nav>
        <div className="hidden xl:block">
          <CustomButton text="BOOK A TOUR" />
        </div>
        <FaBars
          onClick={() => setIsOpen((prev) => !prev)}
          className="block xl:hidden text-[25px]"
        />
      </header>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;
