// Given 2 numbers N and M add both the numbers and check whether the sum is odd or even.


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

  let a=userInput[0].split(' ').map(num=>Number(num));
let c = a[0]+a[1];
if(c%2 == 0)
{console.log("even");}
else{console.log("odd");}

  //end-here
});