import { IoMdHeartEmpty } from "react-icons/io";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse" aria-hidden="true">
      <div className="relative bg-surface min-h-80">
        <div className="absolute top-4 left-4 h-6 w-20 bg-accentLight/60" />
        <IoMdHeartEmpty className="absolute top-4 right-4 h-6 w-6 fill-accentMedium" />
        <div className="absolute inset-x-5 bottom-5 h-8 bg-accentLight/60" />
      </div>

      <div className="mt-2">
        <div className="h-5 w-3/4 mb-2 bg-accentLight/60" />
        <div className="h-5 w-16 mb-2 bg-accentLight/60" />
        <div className="flex justify-between">
          <div className="h-4 w-12 bg-accentLight/60" />
          <div className="h-4 w-16 bg-accentLight/60" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
