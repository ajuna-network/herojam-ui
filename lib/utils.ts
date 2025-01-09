import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trimAddress(address: string) {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
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
