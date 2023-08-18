import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full h-[92px] px-[26.5px] flex items-center gap-[72px]">
      <Link href="/">
        <Image src="/logo.svg" width="159" height="21" alt="Hotdesk logo" />
      </Link>
      <nav className="flex-1 hidden xmd:flex gap-[36px]">
        <Link href="/">Membership</Link>
        <Link href="/">Locations</Link>
        <Link href="/">Facilities</Link>
        <Link href="/">News</Link>
        <Link href="/">Contact</Link>
      </nav>
      <CustomButton text="BOOK A TOUR" />
    </header>
  );
};

export default Navbar;
