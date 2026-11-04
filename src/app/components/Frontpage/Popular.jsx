import CardComponent from "../General/Card";

export default async function Popular({ searchParams }) {
  return (
    <>
      <section className="my-16">
        <h2 className="mb-8">Popular products</h2>
        <FetchPopular />
      </section>
    </>
  );
}

const FetchPopular = async () => {
  const url = `https://dummyjson.com/products/category/furniture?limit=4`;

  const response = await fetch(url);
  const { products } = await response.json();
  return (
    <div className="grid grid-cols-4 gap-4 md:gap-8">
      {products.map((product) => (
        <CardComponent key={product.id} product={product} />
      ))}
    </div>
  );
};
