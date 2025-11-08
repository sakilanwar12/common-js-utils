<a name="generateCode"></a>

## generateCode() ⇒ <code>String</code>

Generates a random code — numeric, alphabetic, or alphanumeric — with a customizable length.
Useful for creating OTPs, verification codes, or short unique identifiers.

### Parameters

| Name   | Type                                                                            | Description                                                  |
| ------ | ------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| type   | <code>"number"</code> | <code>"string"</code> | <code>"all"</code> *(optional)* | Type of characters to include in the code. Default: `"all"`. |
| length | <code>number</code> *(optional)*                                                | Length of the generated code. Default: `6`.                  |


### Example

```js
import { generateCode } from "js-utility-method";
```

```js
generateCode(); // => "aZ3kLp"
generateCode({ type: "number" }); // => "482193"
generateCode({ type: "string", length: 8 }); // => "aBcDeFgH"
generateCode({ type: "all", length: 10 }); // => "Ab92dLzPq7"
```
