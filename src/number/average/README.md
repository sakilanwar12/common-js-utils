<a name="average"></a>

## average() ⇒ <code>Number</code>

Calculates the average of an array of numbers.
Returns 0 if the array is empty.


### Parameters

| Name | Type | Description |
| --- | --- | --- |
| numbers | <code>number[]</code> &#124; <code>Array</code> | An array of numeric values.

**Example**  
```js
average([5, 10, 50, -45, 6, 7]); // => 5.5
average([1, 2, 3, 4, 5]);        // => 3
average([]);                    // => 0
average([100]);                 // => 100
average([-10, 10]);             // => 0

```