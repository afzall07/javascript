// Dates

let myDate = new Date();
// console.log(myDate); // output => 2024-06-03T10:15:16.194Z
// console.log(myDate.toDateString()); // output => Mon Jun 03 2024
// console.log(myDate.toISOString()); // output => 2024-06-03T10:15:16.194Z
// console.log(myDate.toJSON()); // output => 2024-06-03T10:15:16.194Z
// console.log(myDate.toLocaleDateString()); // output => 6/3/2024
// console.log(myDate.toLocaleString()); // output => 6/3/2024, 10:20:43 AM
// console.log(myDate.toString()); // output => Mon Jun 03 2024 10:22:28 GMT+0000 (Coordinated Universal Time)
// console.log(typeof myDate);

// let myCreateDate = new Date(2024, 1, 17);
// let myCreateDate = new Date(2024, 1, 17, 5, 3);
// let myCreateDate = new Date("2024-01-17");
let myCreateDate = new Date("01-17-2024");
// console.log(myCreateDate.toLocaleString());
// console.log(myCreateDate.getTime()); // time in miliseconds

let myTimeStamp = Date.now(); //miliseconds 
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000)); // seconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default',{
    weekday: "long"
})

console.log(newDate);