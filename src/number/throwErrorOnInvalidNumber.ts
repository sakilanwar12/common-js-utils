import { checkIsNumber } from "./checkIsNumber/checkIsNumber";

export function throwErrorOnInvalidNumber(
  value: unknown,
  name: string,
  safeParse = false,
  fallback: number = 0
): number {
  if (safeParse) {
    try {
      if (!checkIsNumber(value)) {
        throw new Error(`Invalid input: ${name} must be a number.`);
      }

      return value;
    } catch (error) {
      console.error(`Error parsing ${name}:`, error);
      return fallback;
    }
  } else {
    if (!checkIsNumber(value)) {
      throw new Error(`Invalid input: ${name} must be a number.`);
    }

    return value;
  }
}
