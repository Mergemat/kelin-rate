import { Star } from "lucide-react";
import { cn } from "~/lib/utils";

export function Rating({ rating = 0 }: { rating: number }) {
  return (
    <div className="flex gap-6 xl:w-full xl:justify-between">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Star
            key={i}
            className={cn(
              "fill-secondary stroke-secondary md:h-8 md:w-8",
              i < rating && "fill-primary stroke-primary",
            )}
          />
        ))}
    </div>
  );
}
