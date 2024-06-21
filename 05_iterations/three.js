// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) { // array ka destructure
    // console.log(key, ':-', value);
}

 const myObj = {
    game1: "pubg",
    game2: "free fire"
 }

 // not working bcz object is not iterable
 for (const [key, value] of myObj ) {
 console.log(key, ':-', value);
 }