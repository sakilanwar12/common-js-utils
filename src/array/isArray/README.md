<a name="isArray"></a>

## isArray() ⇒ <code>Boolean</code>

Checks whether the given value is an array.

### Parameters

| Name  | Type                 | Description         |
| ----- | -------------------- | ------------------- |
| value | <code>unknown</code> | The value to check. |

### Example


```js
import {isArray} from 'js-utility-method'
```

```js
isArray([1, 2, 3]);            // => true
isArray("Hello");              // => false
isArray({ key: "value" });     // => false
isArray(null);                 // => false
isArray(undefined);            // => false
```