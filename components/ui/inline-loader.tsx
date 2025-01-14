export function InlineLoader({
  symbol = ".",
  count = 3,
}: {
  symbol?: string;
  count?: number;
}) {
  return (
    <div className="flex">
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={`text-xs text-muted-foreground animate-bounce ${
            index > 0 ? `delay-${index * 100}` : ""
          }`}
        >
          {symbol}
        </span>
      ))}
    </div>
  );
}
