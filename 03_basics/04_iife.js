// Immediately Invoked Function Expressions (IIFE)

// IIFE ka use globle scope ke polution se bachne ke liye hota hai

(function chai() { 
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // dusra function call karne ke liye first function ko end karna hota h ";" se


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ("afzal")

