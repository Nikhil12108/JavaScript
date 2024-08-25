const myArr = [1, 2, 3, 4, 5, 6, 7];
const heroArr = ["iron-man", "thor", "loki"];
// console.log(myArr)
// console.log(myArr[3])

// shallow copy are the copies where the reference points are the same
// deep copy are the copies where the reference is not a same, different space is allocated all-together

// arrays methods
myArr.push(10);
//console.log(myArr)

myArr.pop();
//console.log(myArr)

myArr.unshift(10); // right shift all and add at start (time consuming)

//console.log(myArr)
myArr.shift(); // shift left and remove first element
//console.log(myArr)

const flag = myArr.includes(5);
//console.log(flag)

//console.log(myArr.indexOf(3))

const newArray = myArr.join() // bind and converted to string
//console.log(myArr) // array
//console.log(newArray) // string

// slice and splice
//console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);
//console.log(myn1)

const myn2 = myArr.splice(1, 3); // it manipulates your original array
//console.log(myn2)

const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["batman", "superman", "flash"]

// marvelHeros.push(dcHeros);
// console.log(marvelHeros)
// console.log(marvelHeros[3]);

marvelHeros.concat(dcHeros)
console.log(marvelHeros)

const allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros)

// spread operator
const allHerosNew = [...marvelHeros, ...dcHeros]
console.log(allHerosNew)

const anotherArr = [1,2,3, [4,5,6]]