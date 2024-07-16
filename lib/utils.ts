import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isBase64Image(imageData: string) {
  const base64Regx = /^data:image\/(png|jpe?g|gif|webp);base64,/;

  return base64Regx.test(imageData);
}
