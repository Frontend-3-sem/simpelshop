"use client";
import useStore from "@/store/cart";
import { TfiShoppingCart } from "react-icons/tfi";
const PopoverBtn = () => {
  const cart = useStore((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      <button className="relative" popoverTarget="cartPopover">
        <div className="absolute -top-2 -left-2 rounded-full h-4 w-4 bg-background text-xs flex items-center justify-center">
          {total}
        </div>
        <TfiShoppingCart className="h-5 w-auto cursor-pointer fill-text hover:scale-108" />
      </button>
    </>
  );
};

export default PopoverBtn;
