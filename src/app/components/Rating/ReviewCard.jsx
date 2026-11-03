import Rating from "./Rating";

export default function ReviewCard({ review }) {
  return (
    <article className="flex flex-col gap-5">
      <div className="">
        <time className="text-xs text-accentMedium">
          {new Date(review.date).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </time>
      </div>

      <Rating rating={review.rating} />

      <p className="font-body text-lg text-text leading-relaxed">“{review.comment}”</p>
    </article>
  );
}

