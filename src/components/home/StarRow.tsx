/** Star rating for a real review (never shown without one). */
export function StarRow({ rating }: { rating: number }) {
  return (
    <span className="flex gap-0.5 text-honey-deep" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={`size-5 ${i < rating ? "" : "opacity-25"}`} fill="currentColor" aria-hidden="true">
          <path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9L12 2.8Z" />
        </svg>
      ))}
    </span>
  );
}
