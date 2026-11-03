import { notFound } from "next/navigation";
import { TfiMinus, TfiPlus, TfiHeart } from "react-icons/tfi";
import Image from "next/image";
import Rating from "@/app/components/Rating/Rating";
import ReviewCard from "@/app/components/Rating/ReviewCard";

const DetailView = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) {
    notFound("Produktet kunne ikke hentes");
  }

  const product = await response.json();
  return (
    <main>
      <section className="grid grid-cols-1  md:grid-cols-5 lg:grid-cols-7 gap-4 p-8  ">
        <div className="col-span-6 p-9">
          <h1 className="text-3xl md:text-5xl lg:text-6xl">{product.title}</h1>
        </div>

        <div className="col-span-1 flex justify-end p-4">
          <TfiHeart className="text-3xl" />
        </div>

        <div className="relative col-span-7 h-200">
          <article className="absolute bottom-0 h-[45%] w-full bg-accentMedium p-6">
            <div className="text-right">
              <p className="text-accentLight">Vejledende udsalgspris</p>
              <p className="text-3xl">{product.price} $</p>
              <p className="text-accentLight"> - {product.discountPercentage}%</p>
            </div>
          </article>

          <div className="absolute left-[10%] top-0 z-10 h-full w-[55%]">
            <Image src={product.images[0]} fill className="object-contain  width={800} height={800}" alt={product.title} />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-7">
        <div className="relative">
          <Image src={product.images[1]} width={500} height={500} className=" w-full aspect-square object-cover object-center" alt={product.tags} />
        </div>
        <div className="relative">
          <Image src={product.images[2]} width={500} height={500} className=" w-full aspect-square object-cover object-center" alt={product.tags} />
        </div>
      </section>

      <article className="grid gap-8 p-40 min-w-80 ">
        <details open>
          <summary className="flex cursor-pointer list-none items-center justify-between border-b border-stone-400 p-1 [&::-webkit-details-marker]:hidden">
            <h3>Description</h3>
            <span className="text-2xl group-open:hidden">
              <TfiPlus />{" "}
            </span>
            <span className="text-2xl hidden group-open:inline">
              <TfiMinus />
            </span>
          </summary>

          <div className="grid grid-cols-2">
            <p>{product.description}</p>
          </div>
        </details>

        <details open>
          <summary className="flex cursor-pointer list-none items-center justify-between border-b border-stone-400 p-1 [&::-webkit-details-marker]:hidden">
            <h3>Specifications</h3>
            <span className="text-2xl group-open:hidden">
              <TfiPlus />{" "}
            </span>
            <span className="text-2xl hidden group-open:inline">
              {" "}
              <TfiMinus />{" "}
            </span>
          </summary>
          <div className="grid grid-cols-2">
            <p>Brand:</p>
            <p className="text-right">{product.brand}</p>

            <p>Model:</p>
            <p className="text-right">{product.sku}</p>

            <p>Weight:</p>
            <p className="text-right">{product.weight} pound</p>

            <p>Height:</p>
            <p className="text-right">{product.dimensions.height} inch</p>

            <p>Depth:</p>
            <p className="text-right">{product.dimensions.depth} inch</p>
          </div>
        </details>

        <details open>
          <summary className="flex cursor-pointer list-none items-center justify-between border-b border-stone-400 p-1 [&::-webkit-details-marker]:hidden">
            <h3>Info</h3>
            <span className="text-2xl group-open:hidden">
              <TfiPlus />{" "}
            </span>
            <span className="text-2xl hidden group-open:inline">
              <TfiMinus />
            </span>
          </summary>
          <div className="grid grid-cols-2">
            <p>Return policy:</p>
            <p className="text-right">{product.returnPolicy}</p>

            <p>Availability Status;</p>
            <p className="text-right">{product.availabilityStatus}</p>

            <p>Shipping information:</p>
            <p className="text-right">{product.weight} pound</p>
          </div>
        </details>
      </article>

      <section className="bg-background px-6 py-20 md:px-16">
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
      </section>
    </main>
  );
};

export default DetailView;
