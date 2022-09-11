// In XYZ country there is rule that car’s engine no. depends upon car’ number plate. Engine no is sum of all the integers
//  present on car’s Number plate.The issuing authority has hired you in order to provide engine no. to the cars.Your task 
//  is to develop an algorithm which takes input as in form of string(Number plate) and gives back




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
let ele= [];
for (i =0;i<a.length;i++)
{if(a[i]>=0)
ele.push(a[i]);
}
// console.log(ele)
let num=ele.map(num=>Number(num));
// console.log(num);
let ans = num.reduce((arr,curr)=>{
    res=arr+curr;
    return res;
})
console.log(ans)

  //end-here
});