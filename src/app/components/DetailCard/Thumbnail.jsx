"use client";
import Image from "next/image";

const Thumbnail = ({ imgsrc, index, setActiveProduct, isActive }) => {
  return (
    <button
      type="button"
      onClick={() => setActiveProduct(index)}
      aria-label={`Show product image ${index + 1}`}
      aria-pressed={isActive}
      className={`relative h-24 w-24 cursor-pointer border p-2 ${isActive ? "border-accentDark" : "border-accentLight"}`}
    >
      <Image src={imgsrc} alt="" fill sizes="96px" className="object-contain" />
    </button>
  );
};

export default Thumbnail;
