import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAvatarInitials(username: string): string {
  if (!username) return "";

  const cleaned = username.trim();
  if (!cleaned) return "";

  const parts = cleaned.split(/\s+/);

  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  if (cleaned.length === 1) {
    return cleaned[0].toUpperCase();
  }

  return (cleaned[0] + cleaned[1]).toUpperCase();
}
