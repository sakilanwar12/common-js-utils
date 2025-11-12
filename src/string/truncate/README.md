<a name="truncate"></a>

## truncate(str, length, [suffix]) ⇒ string

Truncates a string to a specified length with an optional suffix.

## Parameters

| Name | Type     | Description            |
| ---- | -------- | ---------------------- |
| `str` | `string` | The string to truncate. |
| `length` | `number` | The maximum length of the truncated string. |
| `[suffix]` | `string` | Optional suffix to append (default: "..."). |

## Returns

string — Returns the truncated string with the suffix appended, or the original string if it's shorter than the specified length.

## Example

```js
import { truncate } from "js-utility-method";
```

```js
truncate("hello world", 5); // => "hello..."
truncate("foo bar baz", 7); // => "foo bar..."
truncate("hello", 10); // => "hello"
truncate("hello world", 5, "…"); // => "hello…"
truncate("foo bar", 3, ""); // => "foo"
```

