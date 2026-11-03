import CardComponent from "../../components/Card";
import Filterbutton from "../../components/FilterButton";
import Search from "../../components/Search";
import Button from "../../components/Button";
import { Suspense } from "react";

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
      <p>10 products</p>
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
      <Suspense key={`${category}-${q}`} fallback={<div>...Loading</div>}>
        <FetchProduct category={category} q={q} />
      </Suspense>
      <div className="flex items-center justify-center w-full sm:w-64 mx-auto mt-15 mb-18">
        <Button text="Show more" color="secondary" />
      </div>
    </section>
  );
}

const FetchProduct = async ({ category, q }) => {
  const url = `https://dummyjson.com/products?limit=0`;

  console.log("Category:", category);
  console.log("Search:", q);
  console.log("Fetching URL:", url);

  const response = await fetch(url);
  const { products } = await response.json();
  const slugs = categories.map((c) => c.slug);
  const card = products
    .filter((f) => slugs.includes(f.category))
    .filter((f) => !category || f.category === category)
    .filter((f) => !q || f.title.toLowerCase().includes(q.toLowerCase()))
    .map((f) => <CardComponent key={f.id} product={f} />);

  if (card.length === 0) return <p>No products</p>;
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {card}
    </div>
  );
};
