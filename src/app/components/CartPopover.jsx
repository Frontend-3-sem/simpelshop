"use client";
import useStore from "@/store/cart";
import CartPopoverItem from "./CartPopoverItem";
import Link from "next/link";
const CartPopover = () => {
  const cart = useStore((state) => state.cart);
  console.log(cart);
  if (cart.length === 0)
    return (
      <>
        <div
          id="cartPopover"
          popover="auto"
          className="w-135 popover p-2 bg-background border border-accentLight"
        >
          <div className="flex flex-col h-fit p-5 justify-between">
            <p>Your cart is empty!</p>
            <p>Click below to continue shopping.</p>
            <div className="flex gap-2.5  bg-background py-2.5">
              <button
                className="font-bold cursor-pointer w-full h-8 bg-accentDark hover:bg-accentMedium text-background"
                popoverTargetAction="hide"
                popoverTarget="cartPopover"
              >
                Continue Shopping
              </button>

              <Link
                popoverTargetAction="hide"
                popoverTarget="cartPopover"
                href={`/checkout`}
                className="font-bold cursor-pointer w-full h-8 bg-surface hover:bg-accentMedium text-text border border-accentLight text-center"
              >
                <span className="align-middle">Proceed to Checkout</span>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  return (
    <>
      <div
        id="cartPopover"
        popover="auto"
        className="w-135 popover p-2 bg-background border border-accentLight"
      >
        <div className="flex flex-col h-121.25 justify-between scrollbar-thin scrollbar-thumb-accentDark scrollbar-track-accentLight overflow-y-auto p-5">
          <div className="gap-2.5 flex flex-col">
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
          <div className="flex gap-2.5 sticky bottom-0 bg-background py-5 mt-2.5">
            <button
              className="font-bold cursor-pointer w-full h-8 bg-accentDark hover:bg-accentMedium text-background"
              popoverTargetAction="hide"
              popoverTarget="cartPopover"
            >
              Continue Shopping
            </button>

            <Link
              popoverTargetAction="hide"
              popoverTarget="cartPopover"
              href={`/checkout`}
              className="font-bold cursor-pointer w-full h-8 bg-surface hover:bg-accentMedium text-text border border-accentLight text-center"
            >
              <span className="align-middle">Proceed to Checkout</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPopover;
