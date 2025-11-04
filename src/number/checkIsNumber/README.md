<a name="average"></a>

## checkIsNumber(value, checkForFiniteNumber) ⇒ boolean

Checks whether a given value is a valid number.
Optionally, it can verify if the number is finite (not Infinity, -Infinity, or NaN).

### Parameters

| Name                   | Type      | Default | Description                                                                                    |
| ---------------------- | --------- | ------- | ---------------------------------------------------------------------------------------------- |
| `value`                | `unknown` | —       | The value to check.                                                                            |
| `checkForFiniteNumber` | `boolean` | `false` | If `true`, ensures the value is a finite number (excludes `Infinity`, `-Infinity`, and `NaN`). |

**Example**

```js
import { checkIsNumber } from "js-utility-method";
```

```js
checkIsNumber(42); // => true
checkIsNumber("42"); // => false
checkIsNumber(NaN); // => false
checkIsNumber(Infinity); // => true
checkIsNumber(Infinity, true); // => false
checkIsNumber(3.14, true); // => true
checkIsNumber(undefined); // => false
```
