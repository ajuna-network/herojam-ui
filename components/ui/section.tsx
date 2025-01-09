import { cn } from "@/lib/utils";

export function Section({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("px-8 py-8", className)}>
      <h1 className="text-2xl font-bold text-center mb-8">{title}</h1>
      {children}
    </div>
  );
}
