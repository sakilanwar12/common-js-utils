<a name="checkIsValidRange"></a>

## checkIsValidRange(value, min, max) ⇒ boolean

Checks whether a given value is a number within a specified range (inclusive).

## Parameters

| Name    | Type      | Description                            |
| ------- | --------- | -------------------------------------- |
| `value` | `unknown` | The value to check.                    |
| `min`   | `number`  | The minimum allowed value (inclusive). |
| `max`   | `number`  | The maximum allowed value (inclusive). |

## Returns

boolean — Returns true if the value is a valid number and lies within the specified range (inclusive), otherwise false.

## Example

```
checkIsValidRange(10, 0, 20);     // => true
checkIsValidRange(25, 0, 20);     // => false
checkIsValidRange(-5, -10, 0);    // => true
checkIsValidRange("10", 0, 20);   // => false
checkIsValidRange(NaN, 0, 20);    // => false
checkIsValidRange(5, 5, 5);       // => true
```
