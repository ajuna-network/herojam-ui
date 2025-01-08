// "use client";

// import { useEffect, useState } from "react";
// import { ReactiveDotProvider } from "@reactive-dot/react";
// import type { Config } from "@reactive-dot/core";

// export function ReactiveDotProviderWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [config, setConfig] = useState<Config | null>(null);

//   useEffect(() => {
//     import("@/client-config").then(({ config }) => {
//       setConfig(config);
//     });
//   }, []);

//   if (!config) return null;

//   return <ReactiveDotProvider config={config}>{children}</ReactiveDotProvider>;
// }
