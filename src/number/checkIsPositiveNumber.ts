import { checkIsNumber } from "./checkIsNumber";

export function checkIsPositiveNumber(value: unknown): value is number {
  return checkIsNumber(value) && value > 0;
}