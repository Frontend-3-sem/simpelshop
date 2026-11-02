import { TfiShield } from "react-icons/tfi";
import Button from "@/app/components/Button";
import CartItem from "@/app/components/CartItem";
export default async function Checkout() {
  return (
    <>
      <h1>Shopping Cart</h1>
      <section className="grid grid-cols-4 gap-4">
        <div className="col-span-3 bg-surface p-4">
          <div className="grid grid-cols-7">
            <h4 className="col-span-3">Item</h4>
            <h4 className="col-span-2">Quantity</h4>
            <h4 className="col-span-2">Total</h4>
          </div>
          <FetchProduct />
        </div>
        <div className="bg-surface p-4">
          <h4>Summary</h4>
          <dl>
            <div className="flex justify-between">
              <dt>Sub total</dt>
              <dd>$100</dd>
            </div>
            <div className="flex justify-between">
              <dt>Discount</dt>
              <dd>$100</dd>
            </div>
            <div className="flex justify-between">
              <dt>Delivery</dt>
              <dd>$100</dd>
            </div>
            <div className="flex justify-between border-t border-accentLight">
              <dt className="font-bold">Total</dt>
              <dd className="font-bold">$100</dd>
            </div>
          </dl>
          <div className="flex gap-1">
            <TfiShield />
            <p className="subtle">Warranty information & privacy policy</p>
          </div>
          <Button text="Proceed to checkout" />
        </div>
      </section>
    </>
  );
}

const FetchProduct = async () => {
  const url = `https://dummyjson.com/products/category/furniture?limit=1`;

  const response = await fetch(url);
  const { products } = await response.json();
  return (
    <div>
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};
