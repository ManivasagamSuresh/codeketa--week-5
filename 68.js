// Rahul is given a task to manipulate a string, He hired you as a developer your task is to delete all
//  the repeating characters and print the result left.



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

  let a = userInput[0].split('');
// console.log(a);
let ans = a.filter((value,index)=>{
    a.splice(index,1);
    let res = ! a.includes(value);
    a.splice(index,0,value);
    return res;
});
console.log(ans.join(""))


  //end-here
});