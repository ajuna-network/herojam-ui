"use client";

import { useState, useEffect } from "react";

const SPINNER_FRAMES = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

export function Spinner() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setFrame((prev) => (prev + 1) % SPINNER_FRAMES.length),
      100
    );
    return () => clearInterval(interval);
  }, []);

  return <span>{SPINNER_FRAMES[frame]}</span>;
}
