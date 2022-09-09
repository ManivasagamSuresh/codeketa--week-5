// Given a string S consisting of 2 words reverse the order of two words .


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

let arr = userInput[0].split(' ');
let res = arr.reverse();
console.log(...res);


  //end-here
});