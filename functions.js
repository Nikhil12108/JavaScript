function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const answer = addTwoNumbers(1,2);
//console.log(answer)

// problem arise when we add 3, "a", the output will be 3a which we don't want


function loginUser(userName) {
    if(userName === undefined || userName === "") {
        // console.log("please enter a user name")
        return;
    }
    return `${userName} just logged in`;
}

const msg = loginUser("")
//console.log(msg)

// functions with objects and arrays

function calculateCartPrice(...num1) {
    
    console.log(num1);
    let sum = 0
    for(let i = 0; i < num1.length; i++) {
        sum += num1[i];
    }
    return sum;
}
//console.log(calculateCartPrice(2, 4, 1, 4))'


// if we are handling objects like this we have to handle type safety
const user = {
    userName: "Nikhil",
    planPrice: 199
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.userName} and active plan is ${anyObject.planPrice}`)
}

handleObject(user);

