import Logo from "./Logo";
import { TfiFacebook, TfiInstagram, TfiLinkedin } from "react-icons/tfi";
const Footer = () => {
  return (
    <>
      <div className="flex justify-between px-8 py-4 bg-accentLight">
        <Logo />
        <nav className="flex flex-col text-xs gap-2">
          <a href="/">Shop</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </nav>
        <div className="flex flex-col gap-2">
          <p className="text-xs">Return policy</p>
          <p className="text-xs">Cookie policy</p>
          <p className="text-xs">Privacy policy</p>
        </div>
        <div>
          <p className="text-xs mb-2">SimpleShop - All rights reserved</p>
          <div className="flex gap-4">
            <TfiFacebook />
            <TfiInstagram />
            <TfiLinkedin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
