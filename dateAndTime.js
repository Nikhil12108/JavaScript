//  t39 is working on temporal a new date API but not ready for production yet!!!
let d = new Date()
// type of date is an Object
console.log(d);
console.log(d.toString())
console.log(d.toDateString());
console.log(d.toLocaleString());
console.log(d.toJSON);

let myCreateDate =  new Date(2002, 6, 1)
console.log(myCreateDate.toDateString())
