<a name="slugify"></a>

## slugify(str) ⇒ string

Converts a string to a URL-friendly slug.

## Parameters

| Name | Type     | Description            |
| ---- | -------- | ---------------------- |
| `str` | `string` | The string to convert to a slug. |

## Returns

string — Returns the string as a URL-friendly slug (lowercase, hyphen-separated, special characters removed), or an empty string if the input is empty or not a string.

## Example

```js
import { slugify } from "js-utility-method";
```

```js
slugify("hello world"); // => "hello-world"
slugify("Hello World"); // => "hello-world"
slugify("foo bar baz"); // => "foo-bar-baz"
slugify("hello@world#test"); // => "hello-world-test"
slugify("  hello world  "); // => "hello-world"
slugify(""); // => ""
```

