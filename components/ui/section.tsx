export function Section({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="px-8 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">{title}</h1>
      {children}
    </div>
  );
}
