"use client";

import { useState, useEffect, useRef } from "react";

interface CommandPromptProps {
  onSubmit?: (command: string) => void;
}

export default function CommandPrompt({ onSubmit }: CommandPromptProps) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit && input.trim()) {
      onSubmit(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <span className="text-green-500 mr-2">$</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow bg-transparent text-green-500 focus:outline-none"
      />
    </form>
  );
}
