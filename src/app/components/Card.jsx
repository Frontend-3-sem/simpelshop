"use client";
import useStore from "@/store/cart";
import Image from "next/image";
import Tags from "./Tags";
import Favourite from "./FavouriteBtn";
import Link from "next/link";

const CardComponent = ({ product }) => {
  const { toggleCart } = useStore();
  return (
    <div>
      <div className="relative flex items-center justify-center bg-surface min-h-80 cursor-pointer">
        <Link href={`/detailview/${product.id}`}>
          <Image
            width={220}
            height={250}
            src={product.images[0]}
            alt={product.title}
            loading="eager"
            className="object-cover h-auto w-auto mb-10"
          ></Image>
        </Link>
        <div className="absolute top-4 left-4 w-full">
          <Tags />
        </div>
        <div className="absolute top-4 right-4">
          <Favourite />
        </div>
        <div className="absolute inset-x-5 bottom-5 flex justify-center">
          <button
            onClick={() => toggleCart(product)}
            className="font-bold cursor-pointer w-full h-8 bg-accentDark hover:bg-accentMedium text-background"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="mt-2">
        <Link href={`/detailview/${product.id}`}>
          <span className="text-base font-header color-text pt-1.5">
            {product.title}
          </span>
        </Link>
        <p className="whitespace-pre-line font-bold">${product.price}</p>
        <div className="flex justify-between">
          <p className="line-through font-light opacity-60">
            $
            {Math.round(
              product.price -
                (product.price * product.discountPercentage) / 100,
            )}
          </p>
          <p className="font-light opacity-60">
            Save ${product.discountPercentage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
