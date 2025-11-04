export function average(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;
  const len = numbers.length;
  for (let i = 0; i < len; i++) {
    sum += numbers[i];
  }
  return sum / len;
}
