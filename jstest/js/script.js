// console.log ("T-T");

// var a = 2;
// for (var i = 0; i <= 10; i++) {
//  	a = a + i;
//  	//console.log("i = " + i);
//  	console.log("a = " + a);
//  } 

//  console.log(a);

//Object creation
 var company = new Object();
 company.name = "Facebook";
 company.ceo = new Object();
 company.ceo.firstName = "Mark";
 company.ceo.favColor = "Blue";

 console.log(company);
 console.log("Company CEO name is: " + company.ceo.firstName);

 console.log(company["name"]);
 var stockPropName = "stock of company";
 company[stockPropName] = 110;

 console.log("Stock price is: " + company[stockPropName]);


//Better way: object literal
var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "Blue"
	},
	"stock of company": 110
};

console.log(facebook.ceo.firstName);

//functions
function multiply(x, y) {
	return x *y;
}
multiply.version = "v.1.0.0";
console.log(multiply.version);


//function factory
function makeMultiplier(multiplier) {
	var myfunc = function (x) {
		return multiplier * 3;
	};

	return myfunc;

}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));


function doOperationOn(x, operation) {
	return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);



