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
  return JSON.stringify(value, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );
}

export const animateBorderClassName =
  "[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent";
