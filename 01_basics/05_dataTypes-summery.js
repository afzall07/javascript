// Primitive Data Types 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const name = "Afal" // String
const score = 100; // Number
const isFollow = true; // boolean
const temp = null; // null
let userName; // undefined

const Id = Symbol('123'); // Symbol
const anotherId = Symbol('123'); 

//  console.log(Id === anotherId);

const bigNumber = 44354534566767756566n; //BigInt
// console.log(typeof bigNumber);


// Reference (Non-Primitive)

// Arrays, Objects, Functions

const cars = ["Audi", "BMW", "Thar"]; // array

// object
let myObj = {
    myName: "afzal",
    age: 18,
    isFollow: true,
}
// console.log(myObj);

// function
const myFunction = function () {
    console.log("Hello World");
}

// ================================

 // Stack memory (use in Primitive dt),  Heap memory (use in Non-Primitive dt)

 let myNameOne = "Afzal";

 let myNametwo = myNameOne;
 myNametwo = "Kabir";

//  console.log(myNameOne);
//  console.log(myNametwo);

 // heap memory ===================

 let userOne = {
    email: "afjalmalik@gmail.com",
    password: 2345
 }

 let userTwo = userOne;
 userTwo.email = "kabirmalik@gmail.com"

 
 console.log(userOne.email);
 console.log(userTwo.email);
