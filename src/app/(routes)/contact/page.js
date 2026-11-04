import { notFound } from "next/navigation";

import ReviewCard from "@/app/components/Rating/ReviewCard";
import useStore from "@/store/cart";
import ProductGallery from "@/app/components/ProductGallery";
import FavouriteBtn from "@/app/components/FavouriteBtn";



const Contact = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) {
    notFound("Produktet kunne ikke hentes");
  }

  const product = await response.json();

  return (
    <main>
       <section className="mx-auto px-8 max-w-6xl 
       selection:bg-accentDark selection:text-background">

<article>



    
</article>


       </section>


    </main>
  );
};

export default Contact;
