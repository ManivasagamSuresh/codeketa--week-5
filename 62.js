// Given a list of N coins, their values (V1, V2, … , VN), and the total sum S. Find the minimum number of
//  coins the sum of which is S (we can use as many coins of one type as we want), if it is not possible to
//  select coins in such a way that they sum up to S then print '-1'.


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
  //Your code goes here … replace the below line with your code lo
  
let a =userInput[0].split(' ').map(num=>Number(num));
let m=a[0];
let v = a[1];
let coins = userInput[1].split(" ").map(num=>Number(num));


function fun(coins, m, v)
{
	
	// Base case
	if (v == 0)
		return 0;
	
	// Initialize result
	let res = Infinity;
// 	console.log(res);
	for(let i = 0; i < m; i++)
	{
		if (coins[i] <= v)
		{
			let sub_res = fun(coins, m,	v - coins[i]);
				res = sub_res + 1;
		}
	}
	return res;
}

// Driver code


console.log( fun(coins, m, v));

// This code is contributed by avanitrachhadiya2155


});