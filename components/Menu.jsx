import Link from "next/link";

const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <nav
      className={`${
        isOpen ? "h-[300px]" : "h-0 p-0"
      } overflow-hidden duration-200 xl:hidden fixed z-[10] top-[90px] left-[50%] translate-x-[-50%] w-[90vw] flex flex-col p-[12px] bg-white gap-[20px]`}
    >
      <Link onClick={() => setIsOpen(false)} href="/">
        Membership
      </Link>
      <Link onClick={() => setIsOpen(false)} href="/">
        Locations
      </Link>
      <Link onClick={() => setIsOpen(false)} href="/">
        Facilities
      </Link>
      <Link onClick={() => setIsOpen(false)} href="/">
        News
      </Link>
      <Link onClick={() => setIsOpen(false)} href="/">
        Contact
      </Link>
      <button
        className="border-black bg-black hover:bg-white text-white hover:text-black
     w-full py-[18px] px-[36px] duration-200 border-[2px] font-unbounded text-[14px] font-bold"
      >
        BOOK A TOUR
      </button>
    </nav>
  );
};

export default Menu;