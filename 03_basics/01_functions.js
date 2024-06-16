function sayMyName() {
    console.log("A");
    console.log("f");
    console.log("z");
    console.log("A");
    console.log("l");
}
// sayMyName();

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
 
// }

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2;
    // return result;  // return ke baad kuchh bhi print nhi hota hai
    return number1 + number2;
 
}

const result = addTwoNumbers(3, 4)

// console.log("result", result);

function loginUserMessage(username = "sam") {

    if (!username) {
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Afzal"));
// console.log(loginUserMessage("afzal"));

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
    
}

// console.log(calculateCartPrice(200, 300, 400, 2000));

const user = {
    username: "Afzal",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray) {
    return getArray[1]

}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]));
