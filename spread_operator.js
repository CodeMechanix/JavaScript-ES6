// ... is spread operator

var arr = [2, 3, 4];
var arr2 = [1, arr, 5, 6];
console.log(arr2); // [1,[2,3,4], 5,6]

// We expect [1,2,3,4,5,6]

var arr3 = [1, ...arr, 5, 6];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

// Concate array value 
var arr4 = [1,2];
var arr5 = [3,4];
var arr4 = [...arr4, ...arr5];
console.log(arr4); // [1,2,3,4]

// String to array
var name = "Hasan";
var arr5 = [...name];
console.log(arr5); // ["H", "a", "s", "a", "n"]

var numbers = [1,2,3,4];
function sum(a,b,c,d){
    return a + b + c + d;
}
console.log(sum(numbers)); // 1,2,3,4undefinedundefinedundefined 

console.log(sum(...numbers)); // 10


