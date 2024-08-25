//writing modern code js
const name = "nikhil"
const repoCount = 50

console.log(name + repoCount);
console.log(`my name is ${name} and my repo count is ${repoCount}`) // prefer this way of writing

const getname = new String('NIKHIL')

console.log(getname[0]);
console.log(getname.__proto__)

const url = "https//:NikhilKumar%20Dhiman.com"
console.log(url.replace("%20", "__"));// answer: "https//:NikhilKumar__Dhiman.com"
console.log(url); // answer : "https//:NikhilKumar%20Dhiman.com"