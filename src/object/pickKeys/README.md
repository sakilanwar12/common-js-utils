<a name="pickKeys"></a>

## pickKeys() ⇒ <code>Object</code>

Creates a new object composed of the specified keys from the given object.

If a key does not exist in the source object, it will be ignored.

## Parameters

| Name | Type                        | Description                                    |
| ---- | --------------------------- | ---------------------------------------------- |
| obj  | <code>Object</code>         | The source object to pick keys from.           |
| keys | <code>Array.<string></code> | An array of keys to include in the new object. |

## Example

```
pickKeys({ id: 1, name: "Sakil", role: "admin" }, ["name", "role"]);
// => { name: "Sakil", role: "admin" }

pickKeys({ a: 10, b: 20, c: 30 }, ["a", "c"]);
// => { a: 10, c: 30 }

pickKeys({ x: 1, y: 2 }, ["z"]);
// => {}
```
