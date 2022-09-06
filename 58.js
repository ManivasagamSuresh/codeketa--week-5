
// Given an array of N elements switch(swap) the element with the adjacent element and print the output.


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
let  s=userInput[0];
  let a = userInput[1].split(" ").map(num=>Number(num));
//   console.log(a.length);
  if(a.length % 2 ==0)
  {
  for (i=0 ; i<a.length ; i=i+2)
  {
      let removed=a[i];
    //   console.log(removed);
      a.splice(i,1,a[i+1]);
      a.splice(i+1,1,removed);
      
      
  }
  console.log(...a);
}
else{
    for (i=0 ; i<a.length-1 ; i=i+2)
  {
      let removed=a[i];
    //   console.log(removed);
      a.splice(i,1,a[i+1]);
      a.splice(i+1,1,removed);
      
      
  }
  console.log(...a);
    
}

  //end-here
});