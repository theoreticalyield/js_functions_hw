##merge(arr1, arr2)

// Write a function called ```merge```.  The function should take two sorted 
// arrays of numbers as input and return a merged array of the sorted numbers 
// from the input.  For example, if the input arrays were `var arr1 = [3,6,11]; 
// var arr2 = [2,4,5,8,9];`  Then the returned array would be: `[2,3,4,5,6,8,9,11]`.


var arr1 = [3, 6, 11];
var arr2 = [2, 4, 5, 8, 9];
var arrMerged = []

var merge = function(arr1, arr2) {
// var arrMerged = [];

while (arr1.length !== 0 && arr2.length !== 0) {
	if (arr1[0] < arr2[0]){
	var smallest = arr1.shift();
	arrMerged.push(smallest);
}
else {
var smallest = arr2.shift();
arrMerged.push(smallest);
}

}

if (arr1.length < arr2.length){
var last = arr2.shift();
arrMerged.push(last);
} else{
var last = arr1.shift();
arrMerged.push(last);
}
return arrMerged ;
}



merge(arr1, arr2);
console.log(arrMerged);









//below is what i started out trying to do

// if for compare push shift
// 	create arrMerged


// var arr1 = [3, 6, 11];
// var arr2 = [2, 4, 5, 8, 9];
// var arrMerged = []

// var merge = function (arr1, arr2) {
// 	for (var i = 0, j = 0, k = 0; j < arr1.length || k < arr2.length; i++)  {

// 	if (arr1[j] < arr2[k] || arr2[k]===undefined) {
// 		arrMerged
// 	}
// 		mergedArr.push([j])

// 	} else if (arr1[j] > arr2[k]) {

// 	}
// }

Anil's solution

while (arr1.length && arr2.length ) {

	if (arr1[0] < arr2[0]) {
		result.push(arr1.shift());
	} else {
		result.push(arr2.shift());
	}
	return result.concat(arr1).concat(arr2)

	alternate while body

	next = arr1[0] <= arr2[0] ) ? arr1.shift() : arr2.shift();
result.push(next);
}
