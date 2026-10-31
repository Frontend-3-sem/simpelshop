import Image from "next/image";
import Tags from "./Tags";
import Button from "./Button";
import Favourite from "./FavouriteBtn";

const CardComponent = () => {
  return (
    <div className="">
      <div className="relative flex items-center justify-center bg-surface min-h-80 cursor-pointer">
        <Image
          width={225}
          height={255}
          src="/bed.webp"
          alt="Furniture bed"
          loading="eager"
          className="object-cover h-auto w-auto"
        ></Image>
        <div className="absolute top-4 left-4 w-full">
          <Tags />
        </div>
        <div className="absolute top-4 right-4">
          <Favourite />
        </div>
        <div className="absolute inset-x-5 bottom-5 flex justify-center">
          <Button text="ADD TO CART" color="primary" />
        </div>
      </div>
      <div className="mt-2">
        <span className="text-base font-header color-text pt-1.5">
          Annibale Colombo bed
        </span>
        <p className="whitespace-pre-line font-bold">$1699.99</p>
        <div className="flex justify-between">
          <p className="line-through font-light opacity-60">$1899.99</p>
          <p className="font-light opacity-60">Save $99.99</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
