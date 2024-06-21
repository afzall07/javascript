const userEmail = []

if (userEmail) {
    console.log("got user email");
    
} else {
    console.log("don't got email");
}

// falsy values

// false, 0, -0, BigInt 0n,  empty string => (""), null, undefined, NaN (not an number)

// truthy values
// "0", 'false'. " ", [], {}, fuction(){}

// if (userEmail.length === 0) {
//     console.log("array is empty");
// }

const emptyObject = 0

if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty");
}


// Nullish Coalescing Operater (??): null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);


// Terniary Operater

// Condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); 

