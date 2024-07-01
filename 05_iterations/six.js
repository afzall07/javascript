// const coding = ["js", "java", "python", "ruby"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item // for Each koi bhi value return nhi karta
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )
// const newNums = myNums.filter((num) => {  // scope ke andar return keyword use karna padta h
//     return num > 4
// })

// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);
const books = [
    { title: "book1", genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: "book2", genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: "book3", genre: 'History', publish: 2005, edition: 2007 },
    { title: "book4", genre: 'Science', publish: 1978, edition: 2004 },
    { title: "book5", genre: 'History', publish: 1985, edition: 2002 },
    { title: "book6", genre: 'Non-Fiction', publish: 1961, edition: 2000 },
    { title: "book7", genre: 'Science', publish: 2007, edition: 2009 },
    { title: "book8", genre: 'History', publish: 2010, edition: 2004 },
    { title: "book9", genre: 'Fiction', publish: 1971, edition: 2005 },
]

let userBooks = books.filter((book) => book.edition === 'History')

userBooks = books.filter((book) => {
    return book.publish >= 2000 && book.genre === 'History'
} )

console.log(userBooks);

