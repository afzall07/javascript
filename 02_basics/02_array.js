const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "flash", "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros[3][2]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros); 

const all_new_heros = [...marvel_heros, ...dc_heros] // spread two or more array
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("Afzal"));
console.log(Array.from("Afzal")); //  convert in array
console.log(Array.from({name: "Afzal"})); // Intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));