import Logo from "./Logo";
import Link from "next/link";
import { TfiFacebook, TfiInstagram, TfiLinkedin } from "react-icons/tfi";
const Footer = () => {
  return (
    <>
      <div className="flex justify-between px-8 py-4 bg-accentLight">
        <Link href={`/`}>
          <Logo />
        </Link>
        <nav className="flex flex-col text-xs gap-2">
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
        <div className="flex flex-col gap-2">
          <p className="cursor-pointer text-xs hover:underline decoration-1">
            Return policy
          </p>
          <p className="cursor-pointer text-xs hover:underline decoration-1">
            Cookie policy
          </p>
          <p className="cursor-pointer text-xs hover:underline decoration-1">
            Privacy policy
          </p>
        </div>
        <div>
          <p className="text-xs mb-2">SimpleShop - All rights reserved</p>
          <div className="flex gap-4">
            <TfiFacebook className="cursor-pointer hover:scale-108" />
            <TfiInstagram className="cursor-pointer hover:scale-108" />
            <TfiLinkedin className="cursor-pointer hover:scale-108" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
