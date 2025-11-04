<a name="randomInRange"></a>

## randomInRange(min, max) ⇒ number

Generates a `random number` within a specified range.
By default, it returns a number between 0 and 1.

## Parameters

| Name  | Type     | Default | Description                                 |
| ----- | -------- | ------- | ------------------------------------------- |
| `min` | `number` | `0`     | The minimum value of the range (inclusive). |
| `max` | `number` | `1`     | The maximum value of the range (inclusive). |

## Returns

`number` — A random number between `min` and `max`.

## Example

```js
import { randomInRange } from "js-utility-method";
```

```js
randomInRange(); // => 0.374 (example output, varies)
randomInRange(5, 10); // => 7.283 (example output, varies)
randomInRange(-10, 10); // => 3.567 (example output, varies)
randomInRange(100, 100); // => 100
```
