// const library = [
//     { title: "JavaScript", pages: 272, author: "Muhammad Sabback", category: "Programming"},
//     { title: "Clean Code", pages: 450, author: "Hoha Goold", category: "Programming"},
//     { title: "Cooking Batter", pages: 1100, author: "Sara Jon", category: "Cooking"},
//     { title: "Good Play", pages: 231, author: "C.J Hob", category: "Sport"},
//     { title: "Rust", pages: 410, author: "DR. Talk", category: "Programming"},
//     { title: "C++", pages: 570, author: "Shmakhm", category: "Programming"},
//     { title: "How to do nothink", pages: 150, author: "Ben Glio", category: "shit"},
// ]
// function searchBook(arr, title){
//     return arr.find(book => book.title === title)
// }

// function sortBooksByPages(arr){
//     return [...arr].sort((a,b) => a.pages - b.pages)
// }

// function getProgrammingBooks(arr){
//     return arr.filter((book) => { return book.category === "Programming"})
// }

// console.log(searchBook(library,"Clean Code"))
// console.log("-----------------")
// console.log(sortBooksByPages(library))
// console.log("-----------------")
// console.log(getProgrammingBooks(library))





const library = [
    { title: "JavaScript", pages: 272, author: "Muhammad Sabback", category: "Programming"},
    { title: "Clean Code", pages: 450, author: "Hoha Goold", category: "Programming"},
    { title: "Cooking Batter", pages: 1100, author: "Sara Jon", category: "Cooking"},
    { title: "Good Play", pages: 231, author: "C.J Hob", category: "Sport"},
    { title: "Rust", pages: 410, author: "DR. Talk", category: "Programming"},
    { title: "C++", pages: 570, author: "Shmakhm", category: "Programming"},
    { title: "How to do nothink", pages: 150, author: "Ben Glio", category: "shit"},
]

function findBookByName(arr, title){
    return arr.filter((book) => book.title === title)
}

function sortBooksByPages(arr){
    return arr.sort((a, b) => a.pages - b.pages)
}

function categoryOfBooks(arr, kindOf){
    return arr.filter((book) => book.category === kindOf)
}

// console.log(findBookByName(library, 'C++'))
// console.log(sortBooksByPages(library))
console.log(categoryOfBooks(library,"Cooking"));
