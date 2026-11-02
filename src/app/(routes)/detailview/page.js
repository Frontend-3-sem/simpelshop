import ProductInfo from "@/app/components/ProductInfo";
import Link from "next/link";
import { products } from "@/app/data/products";

export default function DetailView() {
  return (
    <main>
      <section className="grid-cols-6 grid-rows-19">
        <ul>
          {products.map((furniture) => (
            <li key={furniture.id}>
              <p>{furniture.title}</p>
            </li>
          ))}
        </ul>

        <p>noget</p>
      </section>

      <ProductInfo />
    </main>
  );
}