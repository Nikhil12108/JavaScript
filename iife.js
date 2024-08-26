// to avoid pollution for the global objects iffe functions  are use

function fun() {
    console.log("hello")
}

// to make the above function iife

(
    function fun1() {
        console.log("hello from  iife")
    }
)(); // this semicolon is to tell the function that the context ended

fun()