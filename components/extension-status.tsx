"use client";

import { useTestExtension } from "@/providers/test-extension-context";

export function ExtensionStatus() {
  const { injectedWeb3 } = useTestExtension();

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="mb-2 text-lg font-semibold">Extension Status</h2>
      <p>
        Extension detected:{" "}
        <span className={injectedWeb3 ? "text-green-500" : "text-red-500"}>
          {injectedWeb3 ? "Yes" : "No"}
        </span>
      </p>
      {injectedWeb3 && (
        <pre className="p-2 mt-2 overflow-auto text-sm rounded">
          {JSON.stringify(injectedWeb3, null, 2)}
        </pre>
      )}
    </div>
  );
}
