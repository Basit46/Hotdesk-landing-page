import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { FaBars } from "react-icons/fa";

const Navbar = ({ setIsOpen }) => {
  return (
    <header className="z-[20] relative bg-white w-full h-[92px] px-[26.5px] flex items-center justify-between xl:justify-start xl:gap-[72px]">
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
      <div className="sm:flex sm:gap-[50px] sm:items-center">
        <div className="hidden sm:block">
          <CustomButton text="BOOK A TOUR" />
        </div>
        <FaBars
          onClick={() => setIsOpen((prev) => !prev)}
          className="block xl:hidden text-[25px]"
        />
      </div>
    </header>
  );
};

export default Navbar;
