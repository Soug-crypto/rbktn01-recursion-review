// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	if (obj === NaN || obj === null || obj === Infinity) return "null";

	if (typeof obj === "string" ) return '"' + obj + '"';

	if (typeof obj === "boolean" || typeof obj === "number"  ) return obj.toString();

	if (Array.isArray(obj)) {

		for (var i = 0; i < obj.length; i++) {
			obj[i] = stringifyJSON(obj[i]);
		}

		return "["+obj.join(",")+ "]";

	}

	if (typeof obj === "object") {


		if (Object.keys(obj).length === 0 ) return  '{}';


		var acc = "{"

		for (var key in obj){

			if (obj[key]=== undefined){

				return  '{}'

			}

			acc = acc + '"' +key.toString()+ '"' + ":" + stringifyJSON(obj[key])+',';

		}

		var lastC = acc[acc.length-1]

		if (lastC === ',') {

			acc = acc.substring(0,acc.length-1)

			return acc + "}"
		} else {

			return acc + "}"

		}



		

	}

}



 


