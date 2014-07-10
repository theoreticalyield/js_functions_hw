// ##sillySum(arr)
// Write a function that takes an array of numbers, and returns the sum
// of each number multiplied by its index. 

// `count += (number * index)`

var numArr = [1, 3, 4, 6],  
sum = 0;

var sillySum = function(num) {

for (var i = 0; i < num.length; i++) {
	var product = num[i] * i;
	sum += product;
};
return sum;
}; 

console.log(sillySum(numArr))


