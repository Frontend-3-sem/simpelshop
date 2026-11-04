import Link from "next/link";

const Filterbutton = ({ text, active, value }) => {
  const href = value ? `?category=${value}` : "?";
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-8 h-10 py-1 font-bold cursor-pointer ${
        active ? "bg-accentLight" : "border-accentMedium bg-transparent border"
      }`}
    >
      {text}
    </Link>
  );
};

export default Filterbutton;
