import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge class names with twMerge for Tailwind CSS
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
