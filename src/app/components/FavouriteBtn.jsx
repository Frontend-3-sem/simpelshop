"use client";
import { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

const Favourite = ({ favouriteId = null }) => {
  const [favourite, setFavourite] = useState(favouriteId !== null);

  return (
    <button
      onClick={() => setFavourite((favourite) => !favourite)}
      type="button"
      aria-label={favourite ? "Add favourite" : "Remove favourite"}
      aria-pressed={favourite}
    >
      {favourite ? (
        <IoMdHeart className="h-6 w-auto cursor-pointer" />
      ) : (
        <IoMdHeartEmpty className="h-6 w-auto cursor-pointer" />
      )}
    </button>
  );
};

export default Favourite;
