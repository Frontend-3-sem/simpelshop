import Logo from "./Logo";
import Link from "next/link";
import { TfiHeart } from "react-icons/tfi";
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
            <Link href={`/listview`}>Shop</Link>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </nav>
          <div className="flex gap-8 items-center pl-8">
            <TfiHeart className="h-5 w-auto cursor-pointer fill-text" />
            <Link href={`/checkout`}>
              <TfiShoppingCart className="h-5 w-auto cursor-pointer fill-text" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
