import styles from "./rating.module.css";

export default function Rating({ rating = 0 }) {
  return (
    <div
      className="flex items-center gap-3"
      role="img"
      aria-label={`${rating} ud af 5 stjerner`}
    >
      <div className="flex text-2xl" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((star) => {
          const fill = Math.min(100, Math.max(0, (rating - (star - 1)) * 100));

          return (
            <span
              key={star}
              className="relative inline-block w-[1em] leading-none"
            >
              <span className="text-accentLight">★</span>

              <span
                className="absolute top-0 left-0 overflow-hidden whitespace-nowrap text-accentDark"
                style={{ width: `${fill}%` }}
              >
                ★
              </span>
            </span>
          );
        })}
      </div>

      <span className="text-sm text-text">{rating.toFixed(2)} / 5</span>
    </div>
  );
}
