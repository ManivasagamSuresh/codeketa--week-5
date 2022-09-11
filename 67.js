// You are given two numbers. Your task is to multiply the two numbers and print the answer.



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

  
let a = userInput[0].split(' ').map(num=>Number(num));
let  b = a[0]*a[1];
console.log(b);

  //end-here
});