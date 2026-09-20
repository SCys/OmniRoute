import { deduplicateRepeatedLinesFast } from "../../native/index.ts";

export interface DeduplicateOptions {
  threshold?: number;
}

export function deduplicateRepeatedLines(
  text: string,
  options: DeduplicateOptions = {}
): {
  text: string;
  collapsed: number;
} {
  return deduplicateRepeatedLinesFast(text, options);
}
