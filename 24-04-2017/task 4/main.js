let nums = [1, 2, 3, 5, 8, 13, 21, 34,];

let str = ["this", "is", "a", "very", "long", "array", "which", "has", 
		"absolutely", "no", "sense"];

//////////

let dublElSum = nums.reduce(function(p, n){
	return p + n*2;
},0);

console.log(dublElSum);

/////////

let isEven = nums.some(function(el){
	return (el % 2) === 0;
});

console.log(isEven);

/////////

let joinEl = str.join(" ");

console.log(joinEl);

/////////

let lengthElArr = str.map(function(el){
	return el = `${el} - ${el.length}`;
});

console.log(lengthElArr);

/////////

let elMore4 = str.filter(function(el){
	return el.length > 4;
});

console.log(elMore4);

/////////

let evenArr = nums.filter(function(el){
	return (el%2) === 0;
});

console.log(evenArr);

/////////



let isMore100Result = function(){

	let SumElofNums = nums.reduce(function(p, n){
	return p+n;
	},0);

	let isMore100;
	if (SumElofNums > 100) {
		isMore100 = true;
	} else isMore100 = false;
	console.log(isMore100);
}();

/////////

function sortStr(a,b){
	if (a.length > b.length) return 1;
	if(a.length < b.length) return -1
}

let sortedStr = new Array(...str);

console.log(sortedStr.sort(sortStr));

/////////

console.log(str.indexOf(sortedStr[sortedStr.length - 1]));

/////////

let nums_str = nums.concat(str);

console.log(nums_str.join(","));