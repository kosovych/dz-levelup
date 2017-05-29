
 function typeOfArg() {

	var arr = [];

	for(var i = 0; arguments.length > i; i++) {

		var _typeOgArg = `${typeof arguments[i]}`;

		arr[i] = _typeOgArg;

	};

	return arr;
}

console.log(typeOfArg(null, undefined, {}));