"use client";

import Image from "next/image";
import Link from "next/link";
import { TfiPlus, TfiMinus } from "react-icons/tfi";
const CartPopoverItem = ({
  src,
  title,
  price,
  discountPercentage,
  product,
}) => {
  return (
    <>
      <div className="grid grid-cols-3 border border-accentLight gap-4 p-4 items-center">
        <Link href={`/detailview/${product.id}`}>
          <Image
            width={500}
            height={500}
            src={src}
            alt={title}
            loading="eager"
            className=" bg-background hover:scale-102"
          ></Image>
        </Link>
        <div className="">
          <Link href={`/detailview/${product.id}`}>
            <h4 className="text-pretty hover:underline hover:decoration-1">
              {title}
            </h4>
          </Link>
          <p>$ {price}</p>
          <p>$ {Math.round(price - (price * discountPercentage) / 100)}</p>
        </div>
        <div className="bg-background px-2 py-1 w-fit">
          <div className="flex h-9 trim gap-4 border border-accentLight px-2 py-1">
            <button className="text-l self-center align-middle hover:scale-108 cursor-pointer">
              <TfiMinus />
            </button>
            <p className="text-xl self-center">1</p>
            <button className="text-l self-center hover:scale-108 cursor-pointer">
              <TfiPlus />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPopoverItem;
