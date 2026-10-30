import ProductInfo from "@/app/components/ProductInfo";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const DetailView = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/category/furniture`);

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Kunne ikke hente varen");
  }

  const furniture = await response.json();
  return (
    <main>
      <Header />
      <section cclassName="grid-cols-6 grid-rows-19">
        <h1>{products.title}</h1>
      </section>

      <ProductInfo />
      <Footer />
    </main>
  );
};

export default DetailView;
