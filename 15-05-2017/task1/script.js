let obj = {
  num: 1.24,
  str: "not very long string",
  f() {
    return this.str.split(" ")
  },
  arr: ["some", "array", {someProp: "value"}],
  prop: { key: 1 },
  empty: null,
  last: 0
};

console.log(obj);

let objDesc = function (_object){

	var objDescription = new Object;

	objDescription.propTypes = [];

	objDescription.propNames = [];

	objDescription["количество собственных свойств"] = 0;

	var i = 0;

	for (var key in _object) {
		objDescription.propTypes[i] = typeof _object[key];
		objDescription.propNames[i] = key;

		if (_object.hasOwnProperty(key)) {
			objDescription["количество собственных свойств"]++;
		}

		if (typeof _object[key] === "number"){
			_object[key] = +_object[key].toFixed(2);
		}

		if (typeof _object[key] === "string"){
			_object[key] = _object[key].toUpperCase();
		}


		i++;
	}

	Object.preventExtensions(_object);
 	return objDescription;

};


console.log(objDesc(obj));

obj.test = "test";

console.log(obj);

