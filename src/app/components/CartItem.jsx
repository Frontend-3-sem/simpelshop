"use client";
import useStore from "@/store/cart";
import Image from "next/image";
import Link from "next/link";
import { TfiTrash, TfiPlus, TfiMinus } from "react-icons/tfi";
const CartItem = ({
  src,
  title,
  category,
  price,
  discountPercentage,
  product,
}) => {
  const toggleCart = useStore((state) => state.toggleCart);
  const removeItem = useStore((state) => state.removeItem);
  const decrease = useStore((state) => state.decrease);
  const itemPrice = price * product.quantity;
  return (
    <>
      <div className="grid grid-cols-7 border-b border-accentLight gap-4 py-4 items-center">
        <Link href={`/detailview/${product.id}`}>
          <Image
            width={500}
            height={500}
            src={src}
            alt={title}
            loading="eager"
            className="col-span-1 bg-background hover:scale-102"
          ></Image>
        </Link>
        <div className="col-span-2">
          <Link href={`/detailview/${product.id}`}>
            <h4 className="text-pretty hover:underline hover:decoration-1">
              {title}
            </h4>
          </Link>
          <p>{category}</p>
        </div>
        <div className="col-span-2 bg-background px-2 py-1 w-fit">
          <div className="flex h-9 trim gap-4">
            <button
              onClick={() => decrease(product.id)}
              className="text-l self-center align-middle hover:scale-108 cursor-pointer"
            >
              <TfiMinus />
            </button>
            <p className="text-xl self-center">{product.quantity}</p>
            <button
              onClick={() => toggleCart(product)}
              className="text-l self-center hover:scale-108 cursor-pointer"
            >
              <TfiPlus />
            </button>
          </div>
        </div>
        <div>
          <p className="col-span-1 subtle line-through">
            $ {Math.round(itemPrice)}
          </p>
          <p className="col-span-1">
            ${" "}
            {Math.round(
              itemPrice -
                ((price * discountPercentage) / 100) * product.quantity,
            )}
          </p>
        </div>
        <button
          onClick={() => removeItem(product.id)}
          className="cursor-pointer col-span-1 mx-4"
        >
          <TfiTrash className="text-2xl justify-self-end hover:scale-108" />
        </button>
      </div>
    </>
  );
};

export default CartItem;
