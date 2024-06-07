// Singleton constructor se banta hai
// Object.create

// Object literals

const mySymb = Symbol("key1");

const JsUser = {
    name: "Afzal",
    "full name": "afzal malik",
    [mySymb]: "myKey1",
    age: 18,
    email: "afjal@gmail.com",
    isLoggedIn: true,
    location: "Sambhal",
    lastLoginDays: ["Monday", "Tuesday"]

}

// console.log(JsUser.age); 
// console.log(JsUser["email"]); 
// console.log(JsUser["full name"]); 
// console.log(JsUser[mySymb]); 

// change object value 

JsUser.email = "afjalmalik@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "riyazul@gmail.com";

// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS USer");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS USer, ${this.name} `);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

 