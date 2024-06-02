const name = "Afzal ";
const repoCount = 50;

// console.log(name + repoCount + " value");

// console.log(`Hello my name is ${name}and my repo count is ${repoCount}`);

const gameName = new String("bgmi-puzzle-chess");

// console.log(gameName[3]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("g"));

const newString = gameName.substring(0, 3);
// console.log(newString);

const anotherString = gameName.slice(-3, 2);
// console.log(anotherString);

const newStringOne = "    Afzal    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://afzal.com/afzal%30malik"

console.log(url.replace('%30', '-'));

console.log(url.includes("afzal"));

console.log(gameName.split('-'));



