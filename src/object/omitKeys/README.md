<a name="omitKeys"></a>

## omitKeys() ⇒ <code>Object</code>

Creates a new object composed of all keys from the given object except the specified keys.

If a key does not exist in the source object, it will be ignored.

## Parameters

| Name | Type                        | Description                                    |
| ---- | --------------------------- | ---------------------------------------------- |
| obj  | <code>Object</code>         | The source object to omit keys from.           |
| keys | <code>Array.<string></code> | An array of keys to exclude from the new object. |

## Example

```js
import { omitKeys } from "js-utility-method";
```

```js
omitKeys({ id: 1, name: "Sakil", role: "admin" }, ["name", "role"]);
// => { id: 1 }

omitKeys({ a: 10, b: 20, c: 30 }, ["a", "c"]);
// => { b: 20 }

omitKeys({ x: 1, y: 2 }, ["z"]);
// => { x: 1, y: 2 }
```

