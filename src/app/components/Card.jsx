import Image from "next/image";
import Tags from "./Tags";
import Button from "./Button";
import { TfiHeart } from "react-icons/tfi";

const CardComponent = () => {
  return (
    <div className="max-w-57.5 w-full">
      <div className="relative flex items-center justify-center bg-taupe-200 min-h-80">
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
          <TfiHeart className="h-5 w-auto" />
        </div>
        <div className="absolute inset-x-6 bottom-6 flex justify-center">
          <Button />
        </div>
      </div>
      <div className="mt-2">
        <span className="text-base font-bold text-gray-800 pt-1.5">
          Annibale Colombo bed
        </span>
        <p className="text-xs whitespace-pre-line text-gray-800 font-bold">
          $1699.99
        </p>
        <div className="flex justify-between">
          <p className="text-xs line-through text-gray-800/40">$1899.99</p>
          <p className="flex text-xs text-gray-800">Save $99.99</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
