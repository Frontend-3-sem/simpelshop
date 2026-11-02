"use client";
import useStore from "@/store/cart";
import CartItem from "./CartItem";
const CartList = () => {
  const cart = useStore((state) => state.cart);
  if (cart.length === 0) return <p>Your cart is empty</p>;
  return (
    <>
      <p>Antal varer: {cart.length}</p>
      <div>
        {cart.map((product) => (
          <CartItem
            src={product.images[0]}
            title={product.title}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default CartList;
