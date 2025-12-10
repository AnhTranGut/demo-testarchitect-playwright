export function getQuantityFromText(text: string): number {
  return parseInt(text.split("x")[0].trim());
}
