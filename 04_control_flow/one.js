// if statement

const isUserLggedIn = true
const temperature = 50

// if (temperature == 50) {
//     console.log("temp is  50");
// } else {
//     console.log("less than 50")
// }

// comparision operaters
// <, >, <=, >=, ==, !=, ===, !==


// const score = 200;

// if (score > 100) {
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }

//  console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("yes");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const UserLggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (UserLggedIn && debitCard) {
    console.log("Alow to buy courses");
    
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}
