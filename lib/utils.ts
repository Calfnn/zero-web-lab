type ClassValue = string | number | null | false | undefined;

/**
 * Minimal class-name joiner. Filters out falsy values and joins with spaces.
 * (No clsx/tailwind-merge dependency — sufficient for the current use cases.)
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}
