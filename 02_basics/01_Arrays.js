// Array

const myArr = [0, 1, 2, 3, 4, 5] 

const myArr2 = new Array(1, 2, 3, 4) 
// console.log(myArr);
// console.log(myArr[1]);

// Array Methods

// myArr.push(6); // add value at last
// myArr.push(7);
// myArr.pop()  // remove value from last

// myArr.unshift(-1); // add value at start
// myArr.shift(); // remove value from start

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(2));

const newArr = myArr.join(); // convert array into string

// console.log(newArr);
// console.log(typeof newArr);
// console.log(myArr); 

/// Slice, Splice

console.log("A ", myArr);

const myNewArr1 = myArr.slice(1, 3); // last range not include, no effect on main array

console.log(myNewArr1);
console.log("B ", myArr);

const myNewArr2 = myArr.splice(1, 3); // include last range and remove element from main array

console.log(myNewArr2);
console.log("C ", myArr);