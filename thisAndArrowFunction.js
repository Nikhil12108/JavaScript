const user = {
    username: "Nikhil",
    welcomeMEssage: function() {
        console.log(`${this.username}, Welcome to the site`)
    }
}
user.welcomeMEssage()
user.username = "SAM"
user.welcomeMEssage()

// const name = function() {
//     console.log("inside function")
// }

const name = () => {
    console.log("inside function")
}