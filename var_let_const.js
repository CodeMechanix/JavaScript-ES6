// var is function scope, and let is block scope

var name = "Hasan";
function setName(){
    var name = "Mahmud";
}
setName();
console.log(name); // Hasan

if(true){
    var age = 10;
}
console.log(age); // 10
// Var work here but let is block scope

if(true){
    let age = 10;
}
console.log(age); // Through Error

const user = {name: "Hasan"};
user = {name: "Mahmud"}; 
console.log(user); // Through Error

user.name = "Mahmud";
console.log(user); // {name: "Mahmud"}

// We can not change the identifier 
// but we can change the Object properties



