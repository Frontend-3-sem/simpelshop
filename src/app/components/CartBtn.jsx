"use client";
import useStore from "@/store/cart";
const CartBtn = ({ className, product }) => {
  const toggleCart = useStore((state) => state.toggleCart);
  return (
    <button
      type="button"
      onClick={() => toggleCart(product)}
      className={`font-bold cursor-pointer w-full h-8 bg-accentDark hover:bg-accentMedium text-background ${className}`}
    >
      Add to cart
    </button>
  );
};

export default CartBtn;
