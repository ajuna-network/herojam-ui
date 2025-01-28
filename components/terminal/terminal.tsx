"use client";

import { useState, useRef, useEffect } from "react";
import CommandPrompt from "./command-prompt";
import CommandOutput from "./command-output";
import { DynamicElements } from "./dynamic-elements";
import { executeCommand } from "@/lib/command-handler";
import { useTxContext } from "@/providers/tx-provider";
import { Spinner } from "./spinner";
import { usePolkadotExtension } from "@/providers/polkadot-extension-provider";

export default function Terminal() {
  const [history, setHistory] = useState<
    Array<{ command: string; output: string }>
  >([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const historyRef = useRef<HTMLDivElement>(null);
  const { isProcessing, setIsProcessing } = useTxContext();
  const { activeSigner, selectedAccount } = usePolkadotExtension();

  useEffect(() => {
    // Handle initial welcome command
    executeCommand("welcome").then((output) => {
      setHistory([{ command: "welcome", output }]);
    });
  }, []);

  const handleCommand = async (command: string) => {
    setHistoryIndex(-1); // Reset history index when new command is executed
    setIsProcessing(true);
    try {
      const output = await executeCommand(command, {
        activeSigner,
        selectedAccount,
      });
      setHistory((prev) => [...prev, { command, output }]);
    } catch (error) {
      setHistory((prev) => [...prev, { command, output: "Error" }]);
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const getPreviousCommand = () => {
    if (history.length === 0) return "";
    const newIndex = historyIndex + 1;
    if (newIndex >= history.length) return history[historyIndex].command;
    setHistoryIndex(newIndex);
    return history[history.length - 1 - newIndex].command;
  };

  const getNextCommand = () => {
    if (historyIndex <= 0) {
      setHistoryIndex(-1);
      return "";
    }
    const newIndex = historyIndex - 1;
    setHistoryIndex(newIndex);
    return history[history.length - 1 - newIndex].command;
  };

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  // Add resetInput handler
  const handleReset = () => {
    if (isProcessing) {
      setIsProcessing(false);
      setHistory((prev) => [
        ...prev,
        { command: "^C", output: "Command interrupted" },
      ]);
    }
  };

  return (
    <div className="w-full max-w-3xl text-sm dark:bg-black bg-amber-100 text-green-500 p-4 rounded-sm shadow-lg font-mono flex flex-col h-[80vh]">
      <div ref={historyRef} className="flex-grow overflow-y-auto mb-4">
        {history.map((item, index) => (
          <div key={index}>
            <CommandOutput command={item.command} output={item.output} />
          </div>
        ))}
      </div>
      <div className="mt-auto">
        {!isProcessing ? (
          <CommandPrompt
            onSubmit={handleCommand}
            onUpPress={getPreviousCommand}
            onDownPress={getNextCommand}
            onCtrlC={handleReset}
          />
        ) : (
          <div className="flex items-center gap-2">
            <Spinner />
          </div>
        )}
        <DynamicElements />
      </div>
    </div>
  );
}
