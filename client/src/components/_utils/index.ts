export const didValueChange = (oldLimit: number, newLimit: number) =>
  oldLimit !== newLimit;

export function getRandomInt(max = Number.MAX_SAFE_INTEGER) {
  return Math.floor(Math.random() * max);
}
