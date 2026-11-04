import CardComponent from "@/app/components/General/Card";
import Filterbutton from "@/app/components/Listview/FilterButton";
import Search from "@/app/components/Listview/Search";
import Button from "@/app/components/General/Button";
import { Suspense } from "react";
import SkeletonCard from "@/app/components/Listview/SkeletonCard";

const categories = [
  { text: "Furniture", slug: "furniture" },
  { text: "Home Decoration", slug: "home-decoration" },
  { text: "Kitchen Accessories", slug: "kitchen-accessories" },
];
export default async function Products({ searchParams }) {
  const { category, q } = await searchParams;
  const current = categories.find((c) => c.slug === category);

  return (
    <section className="mx-auto px-8 max-w-6xl selection:bg-accentDark selection:text-background">
      <h1 className="mt-14 mb-2">{current?.text ?? "All products"}</h1>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-6 mt-4">
        <div className="flex flex-wrap w-full max-w-2xl gap-2">
          <Filterbutton text="All" value="" active={!category} />
          {categories.map((filter) => (
            <Filterbutton
              key={filter.slug}
              text={filter.text}
              value={filter.slug}
              active={category === filter.slug}
            />
          ))}
        </div>
        <div>
          <Search />
        </div>
      </div>
      <Suspense
        key={`${category}-${q}`}
        fallback={
          <>
            <div className="mb-3 h-6 w-18 animate-pulse bg-accentLight/60" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          </>
        }
      >
        <FetchProduct category={category} q={q} />
      </Suspense>
      <div className="flex items-center justify-center w-full sm:w-64 mx-auto mt-15 mb-18">
        <Button
          text="Show more"
          color="secondary"
          className="cursor-not-allowed"
        />
      </div>
    </section>
  );
}
const FetchProduct = async ({ category, q }) => {
  const url = `https://dummyjson.com/products?limit=0`;

  const response = await fetch(url);
  const { products } = await response.json();
  const slugs = categories.map((c) => c.slug);
  const card = products
    .filter((f) => slugs.includes(f.category))
    .filter((f) => !category || f.category === category)
    .filter((f) => !q || f.title.toLowerCase().includes(q.toLowerCase()))
    .map((f) => <CardComponent key={f.id} product={f} />);

  return (
    <>
      <p className="mb-3">{card.length} Products</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {card}
      </div>
    </>
  );
};
