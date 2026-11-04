import Logo from "./Logo";
import Link from "next/link";
import CartPopover from "../Cart/CartPopover";
import PopoverBtn from "../Cart/PopoverBtn";
import { IoMdHeart } from "react-icons/io";
const Header = () => {
  return (
    <>
      <div className="bg-accentLight flex justify-between px-8 py-4">
        <Link href={`/`}>
          <Logo />
        </Link>
        <div className="flex">
          <nav className="flex gap-8 items-center">
            <Link className="hover:underline decoration-1" href={`/listview`}>
              Shop
            </Link>
            <Link className="hover:underline decoration-1" href="/">
              About
            </Link>
            <Link className="hover:underline decoration-1" href="/">
              Contact
            </Link>
          </nav>
          <div className="flex gap-8 items-center pl-8">
            <Link href={`/favourite`}>
              <IoMdHeart className="h-5 w-auto cursor-pointer fill-text hover:scale-108" />
            </Link>
            <PopoverBtn />
          </div>
        </div>
      </div>
      <CartPopover />
    </>
  );
};

export default Header;
