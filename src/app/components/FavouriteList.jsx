"use client";
import useStore from "@/store/favourite";
import CardComponent from "@/app/components/Card";

export default function FavouritesClient({ products }) {
  const favourites = useStore((state) => state.favourites);
  const favouriteProducts = products.filter((p) => favourites.includes(p.id));

  return (
    <div className="mx-auto px-8 max-w-6xl ">
      <h1 className="mt-14 mb-2">My Favourites</h1>

      {favouriteProducts.length === 0 ? (
        <p className="mb-18 h-screen">
          You haven't added any favourite products yet.
        </p>
      ) : (
        <>
          <p className="mb-3">
            {favouriteProducts.length}{" "}
            {favouriteProducts.length === 1 ? "Product" : "Products"}
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-5 mb-18">
            {favouriteProducts.map((product) => (
              <CardComponent key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
