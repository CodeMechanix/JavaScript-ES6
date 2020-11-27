// Normal Function
function sum1(num1, num2){
    return num1 + num2;
}
// Explicit -> Have return Keyword
// Implicit -> No return Keyword
// "Implicitly" means that the JS engine does it. "Explicitly" means that you must do it.
console.log(sum1(10, 5)); // 15 

// Arrow Function
const sum2 = (num1, num2) => {
    return num1 + num2;
}
console.log(sum2(10,10)); // 20

const sum3 = (x,y) => x + y;
console.log(sum3(10,10)); // 20

const numOne = x => x;
console.log(numOne(5)); //5

// Normal Function
function setName(id, name){
    return {
        id: id,
        name: name
    }
}
console.log(setName(1, "Hasam")); // {1, "Hasan"}

// Arrow Function
let setNameNew = (id, name) => ({
    id: id, name: name
});
console.log(setNameNew(1, "Hasam")); // {1, "Hasan"}



