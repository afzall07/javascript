const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().charAt(0));
// console.log(balance.toFixed(2));

const otherNumber = 123.89804;
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++++ Maths +++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5));  // change - into +
// console.log(Math.round(5.7)); // if after point's number is >= 5 give next number
// console.log(Math.ceil(5.1)); // it gives next number 
// console.log(Math.floor(5.9)); //  it gives same number
// console.log(Math.sqrt(25));
// console.log(Math.min(25,2, 45, 10 , 15));
// console.log(Math.max(2, 5, 12, 10));


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
