"use client";
import useStore from "@/store/cart";
import CartPopoverItem from "./CartPopoverItem";
const CartPopover = () => {
  const cart = useStore((state) => state.cart);

  return (
    <>
      <div
        id="cartPopover"
        popover="auto"
        className="max-w-125 popover p-2 bg-background"
      >
        <div>
          {cart.map((product) => (
            <CartPopoverItem
              key={product.id}
              src={product.images[0]}
              title={product.title}
              price={product.price}
              discountPercentage={product.discountPercentage}
              product={product}
            />
          ))}
        </div>
        <div className="flex">
          <button
            className="font-bold cursor-pointer w-full h-8 bg-accentDark hover:bg-accentMedium text-background"
            popoverTargetAction="hide"
            popoverTarget="cartPopover"
          >
            klik luk
          </button>
          <button className="font-bold cursor-pointer w-full h-8 bg-surface hover:bg-accentMedium text-text border border-accentLight">
            klik kurv
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPopover;
