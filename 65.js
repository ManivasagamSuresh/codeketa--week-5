// Assume your brother studies in class 2. He has to  complete his homework on co-primes. As an elder sibling help him in finding whether the given two numbers is co-prime or not.



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

 let n = userInput[0].split(' ').map(num=>Number(num));
function hcf(a,b){
    let result = Math.min(a,b);
   while(result>0){
    if(a%result==0 && b%result==0)
    {
        break ;
        
    }
    result--;
}
return result;
}
let res = (hcf(n[0],n[1]));
if (res==1){
    console.log(1);
}
else{
    console.log(0);
}

  //end-here
});