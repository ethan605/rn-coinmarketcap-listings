export function delay(ms: number): Promise<void> {
  return new Promise((resolve): number => setTimeout(resolve, ms));
}
