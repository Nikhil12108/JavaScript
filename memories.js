// stack and heap memory
// stack used in primitive type // you are always provided value
// heap is used in non primitive // you are always provided reference

let myName = "Nikhil Dhiman"

let anotherName = myName
anotherName = "Nikhil Kumar"
console.log(myName)
console.log(anotherName)

let user = {
    email: "user@google.com",
    upiId: "user@ybl",
}

let anotherUser = user

anotherUser.email = "Dhiman@gmail.com"

console.log(user.email) // answer = "Dhiman@gmail.com"