import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export * from "./format-balance";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trimAddress(address: string, length?: number) {
  if (!length) length = 4;
  return `${address.slice(0, length)}...${address.slice(-length)}`;
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function deslugify(str: string) {
  return str.replace(/-/g, " ").split(" ").map(capitalizeFirstLetter).join(" ");
}

export function stringifyWithBigInt(value: unknown) {
  return JSON.stringify(
    value,
    (key, value) => (typeof value === "bigint" ? value.toString() : value),
    2
  );
}

export const animateBorderClassName =
  "[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent";

export interface ColoredText {
  text: string;
  color: string;
}

export function colorize(text: string, colors: string[]): string {
  const result: ColoredText[] = [];
  let colorIndex = 0;

  for (const char of text) {
    result.push({
      text: char,
      color: colors[colorIndex],
    });
    if (char !== "\n") colorIndex = (colorIndex + 1) % colors.length;
  }

  return result
    .map(({ text, color }) => `<span class="${color}">${text}</span>`)
    .join("");
}

export const terminalColors = [
  "text-red-500",
  "text-orange-500",
  "text-yellow-500",
  "text-green-500",
  "text-blue-500",
  "text-indigo-500",
  "text-purple-500",
] as const;

export function rainbowize(text: string): string {
  return colorize(text, terminalColors as unknown as string[]);
}
