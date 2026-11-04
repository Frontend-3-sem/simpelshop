import FavouriteList from "@/app/components/FavouriteList";

export default async function Page() {
  const res = await fetch("https://dummyjson.com/products?limit=0");
  const favourite = await res.json();
  return <FavouriteList products={favourite.products} />;
}
