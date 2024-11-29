import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function birthday() {
  const today = new Date()
  const birthday = new Date(today.getFullYear(), 10, 28)
  return today.getMonth() === birthday.getMonth() &&
    today.getDate() === birthday.getDate() ? true : false;
}