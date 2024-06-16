const user = {
    username: "Afzal",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "afzal"
//     console.log(this.username);  // this not work in functions
// }

// chai()

// const chai = function(){
//     let username = "afzal"
//     console.log(this.username);
// }


// =========== arrow function ===============

const chai = () => {
    let username = "afzal"
    console.log(this);

}

// chai()


// ======================= basic arrow function (explicit return) ====================

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// =============== implicit return =============

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  ( num1 + num2 ) // () parenthesis ke sath return keyword nhi likhte

const addTwo = (num1, num2) => ({username: "afzal"})  // object ko return karne ke liye usko () mein rap karna hota h

console.log(addTwo(4, 4));