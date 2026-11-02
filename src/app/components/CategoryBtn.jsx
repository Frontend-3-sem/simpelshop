import Link from "next/link";
const CategoryBtn = ({ text, category, className }) => {
  return (
    <>
      <Link
        className={`py-2 px-10 font-bold cursor-pointer bg-accentDark hover:bg-accentMedium text-background ${className}`}
        href={`/listview?category=${category}`}
      >
        {text}
      </Link>
    </>
  );
};

export default CategoryBtn;
