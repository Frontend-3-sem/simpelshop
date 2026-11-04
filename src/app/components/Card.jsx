"use client";
import useStore from "@/store/cart";
import Image from "next/image";
import Tags from "./Tags";
import Favourite from "./FavouriteBtn";
import Link from "next/link";

const CardComponent = ({ product }) => {
  const toggleCart = useStore((state) => state.toggleCart);
  const discountedPrice = Math.round(
    product.price - (product.price * product.discountPercentage) / 100,
  );
  const save = Math.round(product.price - discountedPrice);
  return (
    <div className="grid row-span-2 grid-rows-subgrid">
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
          <button
            type="button"
            onClick={() => toggleCart(product)}
            className="font-bold cursor-pointer w-full h-8 bg-accentDark hover:bg-accentMedium text-background"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="mt-2 flex flex-col">
        <Link href={`/detailview/${product.id}`} className="block grow">
          <span className="text-base font-header color-text pt-1.5">
            {product.title}
          </span>
        </Link>
        <p className="whitespace-pre-line font-bold">${discountedPrice}</p>
        <div className="flex justify-between">
          <p className="line-through font-light opacity-60">${product.price}</p>
          <p className="font-light opacity-60">Save ${save}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
