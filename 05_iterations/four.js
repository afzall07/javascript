const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    py: "python"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "java", "python", "cpp", "ruby"]
for (const key in programming) {
//    console.log(programming[key]);
}

// =========== not working on map ============
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")

// for (const key in map) {
//     console.log(key);
// }