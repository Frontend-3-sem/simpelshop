"use client";
import useStore from "@/store/cart";
import Image from "next/image";
import Link from "next/link";
import { TfiTrash, TfiPlus, TfiMinus } from "react-icons/tfi";
const CartPopoverItem = ({
  src,
  title,
  price,
  discountPercentage,
  product,
}) => {
  const toggleCart = useStore((state) => state.toggleCart);
  return (
    <>
      <div className="grid grid-cols-4 border border-accentLight gap-4 items-center h-33.75 pl-4 pr-2">
        <Link href={`/detailview/${product.id}`}>
          <Image
            width={500}
            height={500}
            src={src}
            alt={title}
            loading="eager"
            className=" bg-background hover:scale-102 my-4"
          ></Image>
        </Link>
        <div className="col-span-2 py-4">
          <Link href={`/detailview/${product.id}`}>
            <h4 className="text-pretty hover:underline hover:decoration-1 text-base font-header color-text mb-1">
              {title}
            </h4>
          </Link>
          <div className="flex gap-4">
            <p>$ {Math.round(price - (price * discountPercentage) / 100)}</p>
            <p className="line-through font-light opacity-60">
              $ {Math.round(price)}
            </p>
          </div>
        </div>
        <div className="bg-background py-2 w-fit h-32.5 stackcontainer place-items-center">
          <button
            onClick={() => toggleCart(product)}
            className="cursor-pointer self-start justify-self-end stackitem"
          >
            <TfiTrash className=" hover:scale-108" />
          </button>

          <div className="flex h-fit trim gap-4 border border-accentLight px-2 place-self-center stackitem mr-4">
            <button className="text-m self-center align-middle hover:scale-108 cursor-pointer">
              <TfiMinus />
            </button>
            <p className="text-l self-center">1</p>
            <button className="text-m self-center hover:scale-108 cursor-pointer">
              <TfiPlus />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPopoverItem;
