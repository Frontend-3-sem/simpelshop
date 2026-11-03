import { TfiShield } from "react-icons/tfi";
import CartList from "@/app/components/CartList";
import Button from "@/app/components/Button";
import CartSummary from "@/app/components/CartSummary";
export default async function Checkout() {
  return (
    <>
      <h1 className="my-12">Shopping Cart</h1>
      <section className="grid grid-cols-4 gap-4 mb-12">
        <div className="col-span-3 bg-surface p-4">
          <div className="grid grid-cols-7 border-b border-accentLight">
            <h4 className="col-span-3">Item</h4>
            <h4 className="col-span-2">Quantity</h4>
            <h4 className="col-span-2">Total</h4>
          </div>
          <CartList />
        </div>
        <div className="bg-surface p-4 h-fit">
          <h4 className="border-b border-accentLight mb-4">Summary</h4>
          <CartSummary />
          <div className="flex gap-1 mb-12">
            <TfiShield />
            <p className="subtle">Warranty information & privacy policy</p>
          </div>
          <Button text="Proceed to checkout" />
        </div>
      </section>
    </>
  );
}
