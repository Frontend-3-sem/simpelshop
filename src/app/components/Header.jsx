import Logo from "./Logo";
import Link from "next/link";
import { IoMdHeart } from "react-icons/io";
import { TfiShoppingCart } from "react-icons/tfi";
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
            <IoMdHeart className="h-5 w-auto cursor-pointer fill-text hover:scale-108" />
            <Link href={`/checkout`}>
              <TfiShoppingCart className="h-5 w-auto cursor-pointer fill-text hover:scale-108" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
