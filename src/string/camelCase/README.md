<a name="camelCase"></a>

## camelCase(str) ⇒ string

Converts a string to camelCase format.

## Parameters

| Name | Type     | Description            |
| ---- | -------- | ---------------------- |
| `str` | `string` | The string to convert to camelCase. |

## Returns

string — Returns the string in camelCase format, or an empty string if the input is empty or not a string.

## Example

```js
import { camelCase } from "js-utility-method";
```

```js
camelCase("hello world"); // => "helloWorld"
camelCase("foo-bar-baz"); // => "fooBarBaz"
camelCase("hello_world"); // => "helloWorld"
camelCase("Hello World"); // => "helloWorld"
camelCase("PascalCase"); // => "pascalCase"
camelCase(""); // => ""
```

