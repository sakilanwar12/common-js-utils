<a name="checkIsPositiveNumber"></a>

## checkIsPositiveNumber(value) ⇒ <code>boolean</code>

Checks whether a given value is a positive number (> 0).

| Name    | Type      | Description         |
| ------- | --------- | ------------------- |
| `value` | `unknown` | The value to check. |


 ## Returns

##### boolean — Returns true if the value is a valid positive number, otherwise false.

```
checkIsPositiveNumber(10);        // => true
checkIsPositiveNumber(0);         // => false
checkIsPositiveNumber(-5);        // => false
checkIsPositiveNumber("10");      // => false
checkIsPositiveNumber(NaN);       // => false
checkIsPositiveNumber(Infinity);  // => true
```