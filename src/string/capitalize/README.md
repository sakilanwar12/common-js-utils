<a name="capitalize"></a>

## capitalize(str) ⇒ string

Capitalizes the first letter of a string.

## Parameters

| Name | Type     | Description            |
| ---- | -------- | ---------------------- |
| `str` | `string` | The string to capitalize. |

## Returns

string — Returns the string with the first letter capitalized, or an empty string if the input is empty or not a string.

## Example

```js
import { capitalize } from "js-utility-method";
```

```js
capitalize("hello"); // => "Hello"
capitalize("world"); // => "World"
capitalize(""); // => ""
capitalize("a"); // => "A"
capitalize("Hello"); // => "Hello"
```

