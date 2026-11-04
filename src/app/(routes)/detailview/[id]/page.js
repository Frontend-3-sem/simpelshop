import { notFound } from "next/navigation";
import ReviewCard from "@/app/components/Rating/ReviewCard";
import DetailCard from "@/app/components/DetailCard/DetailCard";

const DetailView = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) {
    notFound("The product could not be retrieved");
  }

  const product = await response.json();

  return (
    <>
      <section className="grid grid-cols-1  gap-4 px-5  max-w-500"  >
        <div>
    
        <DetailCard product={product} />
</div>

      <article className="bg-background px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-accentLight pb-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accentMedium">Customer experiences</p>

              <h2 className="font-header text-4xl text-text md:text-5xl">What our customers say</h2>
            </div>

            <span className="text-sm text-accentMedium">{product.reviews?.length ?? 0} Reviews</span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {product.reviews?.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </div>
      </article>
      </section>
    </>
  );
};

export default DetailView;
