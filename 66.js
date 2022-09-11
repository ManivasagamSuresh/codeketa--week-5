// A person saves his monthly saving according to given schema. He saves sam e amount of money which is equal to the money
//  saved in immediate previous two months. Assume, initially he saved 1000 rupees and in first month he saved another 1000. 
// Your task is to tell how much he had totally saved at the end of ‘n’ months



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

  let n = userInput[0];
// console.log(a);
let ans =1000;
for (i=1;i<=n;i++)
 {
     ans=ans+(i*1000);
 }

console.log(ans);

  //end-here
});