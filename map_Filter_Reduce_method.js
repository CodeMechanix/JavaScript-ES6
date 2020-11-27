
let dataArr = [10, 5, 15, 20];

dataArr.map((number, index) => {
    console.log(`Number: ${number} and Index: ${index}`);
    // Number: 10 and Index: 0
    // Number: 5 and Index: 1
    // Number: 15 and Index: 2
    // Number: 20 and Index: 3
});

let filerNumber = dataArr.filter((number, index) =>{
    return number > 6;
});
console.log(filerNumber);
// [10, 15, 20]

let reduceNumber = dataArr.reduce((accu, number, index)=>{
    return accu + number;
});
console.log(reduceNumber); // 50

// Using map you iterate the elements, and for each element you return an element you want.
// For example, if you have an array of numbers and want to get their squares, you can do this:

// A function which calculates the square
const square = x => x * x

// Use `map` to get the square of each number
console.log([1, 2, 3, 4, 5].map(square))
// [1, 4, 9, 16, 25]

// Using an array as an input, 
// you can get one single element 
// (let's say an Object, or a Number, 
// or another Array) based on the callback 
// function (the first argument) which gets 
// the accumulator and current_element
// parameters:

const newNumbers = [1, 2, 3, 4, 5]

// Calculate the sum
console.log(newNumbers.reduce(function (acc, current) {
  return acc + current
}, 0)) // < Start with 0
// 15

// Calculate the product
console.log(newNumbers.reduce(function (acc, current) {
  return acc * current
}, 1)) // < Start with 1
// 120
console.log(newNumbers); // [1, 2, 3, 4, 5]

// Which one should you choose when you can do the same thing with both? 
// Try to imagine how the code looks. 
// For the example provided, you can compute the squares array like you mentioned, using reduce:

 // Now, looking at these, obviously the second implementation looks better and it's shorter. 
 // Usually you'd choose the cleaner solution, which in this case is map. Of course, 
 // you can do it with reduce, but in a nutshell, think which would be shorter and eventually that would be better.

 /*
 Map returns a new array with the equal no. of elements as there are in the original array. 
 Therefore, if the original array has 5 elements, the returned array will also have 5 elements. 
 This method is used whenever we want to make some change on every individual element of an array. 
 */

 /*
Filter returns a new array with equal/less number of elements than the original array. 
It returns those elements in the array which have passed some condition. 
This method is used when we want to apply a filter on the original array therefore the name filter.
 */

 /*
 Reduce returns a single value, unlike a map/filter. 
 Therefore, whenever we want to run an operation on all elements of an array but want a single output using all elements, 
 we use reduce. You can remember an array's output is reduced to a single value therefore the name reduce.
 */