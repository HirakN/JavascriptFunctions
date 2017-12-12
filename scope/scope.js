var myName = "Hirak";
var myGender = "Male";
var age = 8;

function announce(name, gender) {

	var age = 6;
	console.log("hello, my name is " + name + " and I am a " + gender);

	function innerFunc(name, gender) {
		var age = 7;
		console.log("hello, my name is " + name + " and I am a " + gender + " from innerScope");
	}
	innerFunc(name, gender);
}

announce(myName, myGender);
innerFunc(name, gender);
console.log(age);	
