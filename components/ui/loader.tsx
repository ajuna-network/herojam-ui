import { cn } from "@/lib/utils";
import { LoaderPinwheel, Swords } from "lucide-react";

export function Loader({ className }: { className?: string }) {
  return (
    <LoaderPinwheel
      className={cn("animate-spin-slow ease-in-out stroke-1", className)}
    />
  );
}
