// Given a number N and an array of N elements, find the Bitwise OR of the array elements.


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
  function f(arr)
{

	let ans = arr[0];
	
	
	for(let i = 0; i < arr.length; i++)
	{
		ans = (ans|arr[i]);
	}
	
	return ans;
}

// Driver Code
let arr = userInput[1].split(' ').map(num=>Number(num));

// Function Call to find AND
console.log(f(arr));

  //end-here
});