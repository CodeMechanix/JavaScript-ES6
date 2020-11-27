// IIFE
// No need to call function separetly
// Make private function

var message = (function(){
    console.log("Hello JS")
})();
// Hello JS

// message(); // Through error 

(function message2(){
    console.log("Hello JS")
})()
// Hello JS

var showNumber = (function(a, b){
    console.log(a, b)
})(10, 5);
// 10 5

// ES6 Process

{
    let uId = 10;
    let test = function(){
        console.log("Hello Java");
    } 
    test(); // Hello Java

    let showText = (function() {
        console.log("Hello Java and JS");
    })()
    // Hello Java and JS
}

// console.log(uId); // Error
// let and const working in block scope
// test function is private 
