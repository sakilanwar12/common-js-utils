export function checkIsNumber(
  value: unknown,
  checkForFiniteNumber: boolean = false,
): value is number {
  const isNumber = typeof value === "number" && !Number.isNaN(value);
  if (checkForFiniteNumber) {
    return isNumber && isFinite(value);
  }

  return isNumber;
}