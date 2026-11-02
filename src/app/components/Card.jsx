import Image from "next/image";
import Tags from "./Tags";
import Button from "./Button";
import Favourite from "./FavouriteBtn";
import Link from "next/link";

const CardComponent = ({ product }) => {
  return (
    <div>
      <Link href={`/detailview/${product.id}`}>
        <div className="relative flex items-center justify-center bg-surface min-h-80 cursor-pointer">
          <Image
            width={220}
            height={250}
            src={product.images[0]}
            alt={product.title}
            loading="eager"
            className="object-cover h-auto w-auto mb-10"
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
            {product.title}
          </span>
          <p className="whitespace-pre-line font-bold">${product.price}</p>
          <div className="flex justify-between">
            <p className="line-through font-light opacity-60">
              $
              {Math.round(
                product.price -
                  (product.price * product.discountPercentage) / 100,
              )}
            </p>
            <p className="font-light opacity-60">
              Save ${product.discountPercentage}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardComponent;
