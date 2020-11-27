
// Normal Process 

let userData = [5, "Hasan", 20]; // id, name, age

let id = userData[0];
let name = userData[1];
let userage = userData[2];

console.log(id, name, userage); // 5 "Hasan" 20

// Array Destructuring 
let [userId, userName, userAge] = userData;
console.log(userId, userName, userAge); // 5 "Hasan" 20

// Object Destructuring
let newUser = {
    newUserId: 5,
    newUserName: "Hasan",
    newUserAge: 20
}

let {newUserId, newUserName, newUserAge} = newUser;

console.log(newUserId, newUserName, newUserAge); // // 5 "Hasan" 20

let newUser2 = {
    newUser2Id: 5,
    newUser2Name: "Hasan",
    newUser2Age: 20,
    address: {
        currentAddress: "Dhaka, Bangladesh",
        permanentAddress: "Noakhali, Bangladesh"
    }
}

let {newUser2Id, newUser2Name, newUser2Age, address: {currentAddress, permanentAddress}} = newUser2;

console.log(newUser2Id, newUser2Name, newUser2Age, currentAddress, permanentAddress);
// 5 "Hasan" 20 "Dhaka, Bangladesh" "Noakhali, Bangladesh"

let newUser3 = {
    newUser3Id: 5,
    newUser3Name: "Hasan",
    newUser3Age: 20,
    newUser3Address: {
        newUser3CurrentAddress: "Dhaka, Bangladesh",
        newUser3PermanentAddress: "Noakhali, Bangladesh",
        phoneNumber: {
            number1: "01516112348"
        }
    }
}

let {newUser3Id, newUser3Name, newUser3Age, newUser3Address: {newUser3CurrentAddress, newUser3PermanentAddress, phoneNumber: {number1}}}  = newUser3;

console.log(newUser2Id, newUser2Name, newUser2Age, newUser3CurrentAddress, newUser3PermanentAddress, number1);
// 5 "Hasan" 20 "Dhaka, Bangladesh" "Noakhali, Bangladesh" "01516112348"
