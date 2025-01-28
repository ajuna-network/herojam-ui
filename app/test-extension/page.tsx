import { ExtensionStatus } from "@/components/extension-status";
import { TestExtensionProvider } from "@/providers/test-extension-context";

export default function TestExtensionPage() {
  return (
    <TestExtensionProvider>
      <div className="container py-8 mx-auto">
        <h1 className="mb-6 text-2xl font-bold">Extension Detection Test</h1>
        <ExtensionStatus />
      </div>
    </TestExtensionProvider>
  );
}
