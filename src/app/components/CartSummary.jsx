"use client";
import useStore from "@/store/cart";
const CartSummary = () => {
  // Utils
  const cart = useStore((state) => state.cart);
  const pluck = (arr, key) => arr.map((i) => i[key]);
  // Price
  const prices = pluck(cart, "price");
  let priceSum = 0;
  prices.forEach((price) => {
    priceSum += price;
  });
  //  Discount
  const discounts = cart.map((product) => {
    return (product.price * product.discountPercentage) / 100;
  });
  let discountSum = 0;
  discounts.forEach((discount) => {
    discountSum += discount;
  });
  // Delivery
  const deliverySum = 20;

  return (
    <>
      <dl>
        <div className="flex justify-between mb-2">
          <dt>Sub total</dt>
          <dd>$ {Math.round(priceSum)}</dd>
        </div>
        <div className="flex justify-between mb-2">
          <dt>Discount</dt>
          <dd>$ {Math.round(discountSum)}</dd>
        </div>
        <div className="flex justify-between mb-4">
          <dt>Delivery</dt>
          <dd>$ {deliverySum}</dd>
        </div>
        <div className="flex justify-between border-t border-accentLight pt-4 mb-12">
          <dt className="font-bold">Total</dt>
          <dd className="font-bold">
            $ {Math.round(priceSum + deliverySum - discountSum)}
          </dd>
        </div>
      </dl>
    </>
  );
};

export default CartSummary;
