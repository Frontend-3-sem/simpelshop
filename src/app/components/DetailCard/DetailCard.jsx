"use client";
import { notFound } from "next/navigation";
import { TfiMinus, TfiPlus } from "react-icons/tfi";
import ProductGallery from "./ProductGallery";
import CartBtn from "../Cart/CartBtn";
import Favourite from "../Favorites/FavouriteBtn";

const DetailCard = ({ product }) => {
  return (
    <>
      <section>
        <div className="flex items-start justify-between gap-4 p-9">
          <h1 className="  text-3xl md:text-5xl lg:text-6xl">
            {product.title}
          </h1>

          <Favourite className="h-9  shrink-0" productId={product.id} />
        </div>

        <div className="relative col-span-7 h-100 ">
          <article className="absolute bottom-0 h-[45%] w-full  bg-accentMedium p-6">
            <div className="px-1 text-right">
              <p className="text-3xl">
                {" "}
                $
                {Math.round(
                  product.price -
                    (product.price * product.discountPercentage) / 100,
                )}{" "}
              </p>
              <div className="flex gap-2">
                <p className="text-background flex-1">
                  {" "}
                  - {product.discountPercentage}%
                </p>
                <p className="line-through font-light opacity-60 text-background ">
                  {product.price} $
                </p>{" "}
              </div>{" "}
            </div>
            <div className="absolute inset-x-5 bottom-5 flex justify-end z-100">
              <CartBtn product={product} />
            </div>
          </article>

          <div className="absolute left-[10%] top-0 z-10 h-full w-[55%]">
            <ProductGallery images={product.images} title={product.title} />
          </div>
        </div>

        <article className="grid gap-8 px-40 pt-40 pb-8 min-w-80">
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
      </section>
    </>
  );
};

export default DetailCard;
