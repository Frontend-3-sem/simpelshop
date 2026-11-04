import { notFound } from "next/navigation";
import { TfiMinus, TfiPlus } from "react-icons/tfi";
import ReviewCard from "@/app/components/Rating/ReviewCard";
import useStore from "@/store/cart";
import ProductGallery from "@/app/components/ProductGallery";
import FavouriteBtn from "@/app/components/FavouriteBtn";

 const { toggleCart } = useStore();

const DetailView = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) {
    notFound("The product could not be retrieved");
  }

  const product = await response.json();

  return (
    <main>
           <section className="grid grid-cols-1  md:grid-cols-5 lg:grid-cols-7 gap-4 px-5  max-w-500   ">
        <div className="col-span-6 p-9">
          <h1 className="text-3xl md:text-5xl lg:text-6xl">{product.title}</h1>
        </div>

        <div className="col-span-1 flex justify-end p-4 ">
          <FavouriteBtn className="text-5xl" />
        </div>

        <div className="relative col-span-7 h-100 ">
          <article className="absolute bottom-0 h-[45%] w-full  bg-accentMedium p-6">
          
              <div className="px-1">
                <p className="text-3xl"> ${Math.round(product.price - (product.price * product.discountPercentage) / 100)} </p>
                <div className="flex gap-2">
                  <p className="text-background flex-1"> - {product.discountPercentage}%</p>
                  <p className="line-through font-light opacity-60 text-background flex-1">{product.price} $</p>{" "}
                </div>{" "}
              </div>
            <div className="absolute inset-x-5 bottom-5 flex justify-end">
              <button
                 onClick={() => toggleCart(product)}
                className="font-bold cursor-pointer w-80 h-8 bg-accentDark hover:bg-accentMedium text-background"
              >
                ADD TO CART
              </button>
            </div>
          </article>

          <div className="absolute left-[10%] top-0 z-10 h-full w-[55%]">
            <ProductGallery images={product.images} title={product.title} />
          </div>
        </div>
      </section>

      <article className="grid gap-8 p-40 min-w-80 ">
        <details>
          <summary className="flex cursor-pointer list-none items-center justify-between border-b border-accentLight p-1 [&::-webkit-details-marker]:hidden">
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

        <details>
          <summary className="flex cursor-pointer list-none items-center justify-between border-b border-accentLight p-1 [&::-webkit-details-marker]:hidden">
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

        <details>
          <summary className="flex cursor-pointer list-none items-center justify-between border-b border-accentLight p-1 [&::-webkit-details-marker]:hidden">
            <h3>Info</h3>
            <span className="text-2xl group-open:hidden">
              <TfiPlus />{" "}
            </span>
            <span className="text-2xl hidden group-open:inline">
              <TfiMinus />
            </span>
          </summary>
          <div className="grid grid-cols-2">
            <p>Availability Status:</p>
            <p className="text-right">{product.availabilityStatus}</p>

            <p>Return policy:</p>
            <p className="text-right">{product.returnPolicy}</p>

            <p>Warranty information:</p>
            <p className="text-right">{product.warrantyInformation}</p>

            <p>Shipping information:</p>
            <p className="text-right">{product.shippingInformation}</p>
          </div>
        </details>
      </article>

      <section className="bg-background px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-accentLight pb-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accentMedium">
                Customer experiences
              </p>

              <h2 className="font-header text-4xl text-text md:text-5xl">
                What our customers say
              </h2>
            </div>

            <span className="text-sm text-accentMedium">
              {product.reviews?.length ?? 0} Reviews
            </span>
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
