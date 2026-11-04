"use client";
import Image from "next/image";
import Tags from "./Tags";
import Favourite from "../Favorites/FavouriteBtn";
import Link from "next/link";
import CartBtn from "../Cart/CartBtn";

const CardComponent = ({ product }) => {
  const discountedPrice = Math.round(
    product.price - (product.price * product.discountPercentage) / 100,
  );
  const save = Math.round(product.price - discountedPrice);
  return (
    <div className="grid row-span-2 grid-rows-subgrid gap-y-0">
      <div className="relative flex items-center justify-center bg-surface min-h-80">
        <Link href={`/detailview/${product.id}`}>
          <Image
            width={220}
            height={250}
            src={product.images?.[0] || "/images/bed.webp"}
            alt={product.title || "Product image"}
            loading="eager"
            className="object-cover mb-10"
            style={{ width: "auto", height: "auto" }}
          ></Image>
        </Link>
        <div className="absolute top-4 left-4 w-full">
          <Tags stock={product.stock} />
        </div>
        <div className="absolute top-4 right-4">
          <Favourite productId={product.id} />
        </div>
        <div className="absolute inset-x-5 bottom-5 flex justify-center">
          <CartBtn product={product} />
        </div>
      </div>
      <div className="mt-2 flex flex-col justify-end">
        <Link href={`/detailview/${product.id}`} className="grow">
          <span className="block text-base font-header color-text pt-1.5 leading-tight">
            {product.title}
          </span>
        </Link>
        <p className="font-bold mb-0">${discountedPrice}</p>
        <div className="flex justify-between">
          <p className="line-through font-light opacity-60 [text-box:trim-both_cap_alphabetic]">
            ${product.price}
          </p>
          <p className="font-light opacity-60 mb-0 [text-box:trim-both_cap_alphabetic]">
            Save ${save}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
