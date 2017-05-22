var filterString = (function() {
	
var someString = prompt("Enter something:");

var arr = someString.split("");

arr.forEach(function(element, index, arr){
	if(arr[index] === "a" || arr[index] === "e" ||
		arr[index] === "i" || arr[index] === "o" ||
		arr[index] === "u" || arr[index] === "y"||
		arr[index] === "A" || arr[index] === "E" ||
		arr[index] === "I" || arr[index] === "O" ||
		arr[index] === "U" || arr[index] === "Y") {

		arr[index] = "";
	}
});

console.log(arr.join(""));

})();