"use client";
import useStore from "@/store/cart";
import CartItem from "./CartItem";
const CartList = () => {
  const cart = useStore((state) => state.cart);

  if (cart.length === 0) return <p>Your cart is empty</p>;
  return (
    <>
      <div>
        {cart.map((product) => (
          <CartItem
            key={product.id}
            src={product.images[0]}
            title={product.title}
            brand={product.brand}
            price={product.price}
            discountPercentage={product.discountPercentage}
            product={product}
          />
        ))}
      </div>
    </>
  );
};

export default CartList;
