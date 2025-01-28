"use client";

import { useState } from "react";

interface CommandPromptProps {
  onSubmit: (command: string) => void;
  onUpPress: () => string;
  onDownPress: () => string;
  onCtrlC: () => void;
}

export default function CommandPrompt({
  onSubmit,
  onUpPress,
  onDownPress,
  onCtrlC,
}: CommandPromptProps) {
  const [command, setCommand] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey && e.key === "c") {
      e.preventDefault();
      onCtrlC();
      setCommand("");
      return;
    }
    if (e.key === "Enter") {
      onSubmit(command);
      setCommand("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const previousCommand = onUpPress();
      setCommand(previousCommand);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextCommand = onDownPress();
      setCommand(nextCommand);
    }
  };

  return (
    <div className="flex items-center">
      <span className="mr-2">$</span>
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-transparent focus:outline-none flex-1"
        autoFocus
      />
    </div>
  );
}
