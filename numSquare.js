// ##numSquare(max)
// Create a function called `numSquare` that will return an array of all 
// perfect square numbers up to, but not exceeding a max number.

var numSquare = function (maxNum) {
	for ( i = 0; i <= maxNum; i++); {
		if (Math.sqrt(i).floor * i === i); {
		 return i 
		}
	}
} 
console.log(numSquare(10));