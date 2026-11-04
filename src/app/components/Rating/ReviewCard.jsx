import Rating from "./Rating";

export default function ReviewCard({ review }) {
  return (
    <article className="flex flex-col gap-5 bg-surface border border-accentLight p-6 md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-body text-base md:text-balance">
          {review.reviewerName}
        </h3>
        <time className="text-xs text-accentMedium">
          {new Date(review.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </time>
      </div>
      <Rating rating={review.rating} />

      <p className="font-body text-lg text-text leading-relaxed">
        “{review.comment}”
      </p>
    </article>
  );
}
