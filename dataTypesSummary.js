// primitive data types

// there are 7 categories
// they are by default call by value
// String, Number, Boolean, null,undefined, symbol
//BigINt
// symbol demo

const id = Symbol('123');
const _id = Symbol('123');
console.log(id === _id); // answer  = false
// reference type/ non primitive type
// direct reference can be provided
//Array, Objects, Functions


const frieds = ["Nikhil", "Aditya", "Deepika", "Anish"]

const myheros = {
    name: "IronMan",
    power: "suit"
}

function greeting() {
    console.log("hello")
}

const myFunction = function() {
    console.log("inside a variable function")
}