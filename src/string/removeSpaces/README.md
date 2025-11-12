<a name="removeSpaces"></a>

## removeSpaces(str) ⇒ string

Removes all spaces from a string.

## Parameters

| Name | Type     | Description            |
| ---- | -------- | ---------------------- |
| `str` | `string` | The string to remove spaces from. |

## Returns

string — Returns the string with all spaces removed, or an empty string if the input is not a string.

## Example

```js
import { removeSpaces } from "js-utility-method";
```

```js
removeSpaces("hello world"); // => "helloworld"
removeSpaces("foo bar baz"); // => "foobarbaz"
removeSpaces("hello    world"); // => "helloworld"
removeSpaces("hello\tworld"); // => "helloworld"
removeSpaces(""); // => ""
```

