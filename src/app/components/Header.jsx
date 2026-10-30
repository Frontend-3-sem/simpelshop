import Logo from "./Logo";
const Header = () => {
  return (
    <>
      <div className="bg-accentLight flex justify-between px-8 py-4">
        <Logo />
        <nav className="flex gap-8 items-center">
          <a href="/">Shop</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </nav>
      </div>
    </>
  );
};

export default Header;
