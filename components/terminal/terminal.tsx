"use client";

import { useState, useRef, useEffect } from "react";
import CommandPrompt from "./command-prompt";
import CommandOutput from "./command-output";
import { DynamicElements } from "./dynamic-elements";
import { executeCommand } from "@/lib/command-handler";

export default function Terminal() {
  const [history, setHistory] = useState<
    Array<{ command: string; output: string }>
  >([]);
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle initial welcome command
    executeCommand("welcome").then((output) => {
      setHistory([{ command: "welcome", output }]);
    });
  }, []);

  const handleCommand = async (command: string) => {
    const output = await executeCommand(command);
    setHistory((prev) => [...prev, { command, output }]);
  };

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="w-full max-w-2xl text-sm dark:bg-black bg-amber-100 text-green-500 p-4 rounded-sm shadow-lg font-mono flex flex-col h-[80vh]">
      <div ref={historyRef} className="flex-grow overflow-y-auto mb-4">
        {history.map((item, index) => (
          <div key={index}>
            <CommandOutput command={item.command} output={item.output} />
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <CommandPrompt onSubmit={handleCommand} />
        <DynamicElements />
      </div>
    </div>
  );
}
