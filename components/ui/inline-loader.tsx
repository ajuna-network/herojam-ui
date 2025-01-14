import { cn } from "@/lib/utils";

export function InlineLoader({
  symbol = ".",
  count = 3,
}: {
  symbol?: string;
  count?: number;
}) {
  const getDelayClass = (index: number) => {
    const delayClasses = {
      0: "",
      1: "delay-100",
      2: "delay-200",
      3: "delay-300",
      4: "delay-400",
    };
    return delayClasses[index as keyof typeof delayClasses] || "";
  };

  return (
    <div className="flex">
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={cn(
            "text-xs text-muted-foreground animate-bounce",
            getDelayClass(index)
          )}
        >
          {symbol}
        </span>
      ))}
    </div>
  );
}
