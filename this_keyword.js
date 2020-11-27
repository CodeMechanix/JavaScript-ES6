console.log(window);
// Show a window object
// All object in Window Object

var a = 10;
// Go to console log and print window.a // show 10

console.log(this);
// Indicate global window object
// this === window -> true

function test1(){
    console.log(this);
}
test1(); 
// Print window object

var userOb = {
    userObName: "Hasan",
    userObId: 5,
    newTest: function(){
        console.log(this);
    },
    anotherObj: {
        anotherObjName : "Mahmud",
        anotherObjTest: function(){
            console.log(this.anotherObjName);
        },
        anotherObjTestThis: function(){
            console.log(this);
        }
    }
}

userOb.newTest();
// {userObName: "Hasan", userObId: 5, newTest: ƒ}
// Print userOb -> this key
userOb.anotherObj.anotherObjTestThis(); 
// {anotherObjName: "Mahmud", anotherObjTest: ƒ, anotherObjTestThis: ƒ}anotherObjName: "Mahmud"anotherObjTest: ƒ ()anotherObjTestThis: ƒ ()__proto__: Object
userOb.anotherObj.anotherObjTest(); // Mahmud


// Function Constructor
function User(constName, constId){
    this.constName = constName;
    this.constId = constId;
    console.log(this);
}

const newConstUser = new User("Hasan", 1);
// User {constName: "Hasan", constId: 1}




