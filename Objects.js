// singleton

// object literals

const mySYM = Symbol("key1")
const user = {
    name: "Nikhil",
    "full name": "Nikhil Dhiman", // cannot be access through . operator
    age: 23,
    [mySYM]: "accessKey",
    location: "Haryana",
    email: "user@gmail.com",
    isLoggedIn: false,

    lastLoginDays: ["Monday", "Saturday"]
}
// two ways to access object
// console.log(user.age);
// console.log(user["age"]);

//console.log(user["full name"]);
//console.log(user[mySYM])

//Object.freeze(user) // will make sure no one can modify object


const tinderUser = {
   
}

tinderUser.id = "123abc"
tinderUser.name = "SAM"
tinderUser.isLoggedIn = false

console.log(tinderUser)