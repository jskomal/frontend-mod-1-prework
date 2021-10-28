# Array Methods

## `pop`
`pop()` removes the last element (think entry or value) from an array and returns
that element. This method shortens the length of the array by 1.

This can be used to define a separate variable from the removed element.
```javascript
var array1 = [1, 2, 3];

const lastElement = array1.pop();

console.log(array1);
// Array [1, 2]
console.log(lastElement);
// 3
```
---
## `push`
`push()` adds on or more elements to the end of the array and changes the length accordingly

---
## `shift`
`shift()` has a similar behavior to pop, but applies to the first element from the array. This also shortens the length of the array by 1.

---
## `unshift`
`unshift()` adds one or more elements to the beginning of an array and returns the new length of the array.

```javascript
var array2 = [10, 20, 30, 45];

console.log(array2.unshift(1, 28));
// 6 <- the length of the changed array

console.log(array2);
// Array [1, 28, 10, 20, 30, 45]
```
