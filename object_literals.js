// Object literals are used to create an object in javascript. 

// ES5 Process 
var name = "Hasan";
var age = 20;

var userOb = {
    name : name,
    age : age
}
console.log(userOb); // {name: "Hasan", age: 20}

// ES6 Process

let userNew = {
    name, age
}
console.log(userNew); // {name: "Hasan", age: 20}

// ES 5 - Object Method
var calculate = {
    multiply: function(x, y){
        return x * y;
    }
}
console.log(calculate.multiply(5,5)); // 25 

// ES 6 - Object Method

let calculateAgain = {
    multiply(x, y){
        return x*y;
    }
}
console.log(calculate.multiply(5,5)); // 25 
