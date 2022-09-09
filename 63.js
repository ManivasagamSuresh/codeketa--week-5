// Given a number N followed by N numbers.Find the smallest number and largest number and print both the indices(1 based indexing).


// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

let n = userInput[0].split(' ');
let arr = userInput[1].split(' ').map(num=>Number(num));
let max =Math.max(...arr);
let min = Math.min(...arr);
// console.log(max);
// console.log(min);
// console.log(arr);
console.log(arr.indexOf(min)+1,arr.indexOf(max)+1);



  //end-here
});