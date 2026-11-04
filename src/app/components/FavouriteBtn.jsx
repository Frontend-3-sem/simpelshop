"use client";
import useStore from "@/store/favourite";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

const Favourite = ({ productId, className }) => {
  const favourites = useStore((state) => state.favourites);
  const toggleFavourite = useStore((state) => state.toggleFavourite);

  const isFavourite = favourites.includes(productId);

  return (
    <button
      type="button"
      onClick={() => toggleFavourite(productId)}
      aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
    >
      {isFavourite ? (
        <IoMdHeart
          className={`h-6 w-auto cursor-pointer hover:scale-108 ${className}`}
        />
      ) : (
        <IoMdHeartEmpty
          className={`h-6 w-auto cursor-pointer hover:scale-108 ${className}`}
        />
      )}
    </button>
  );
};

export default Favourite;
