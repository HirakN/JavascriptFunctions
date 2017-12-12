stuff = ["start", 90, "hello", "Fizzbuzz", 9, true, 12, "end"];

function forLoop(array) {
	for (var ii = 0; ii < stuff.length; ii++) {
		console.log(stuff[ii]);
	}
}

function whileLoop(array) {
	var ii = 0;
	while (ii < stuff.length) {
		console.log(stuff[ii]);
		ii++;
	}
}

function forInLoop(array) {
	for (var ii in stuff) {
		console.log(stuff[ii]);
	}
}

function doWhileLoop(array) {
	var ii = 0;
	do {
		console.log(stuff[ii]);
		ii++;
	} while (ii < stuff.length)
}

forLoop(stuff);
whileLoop(stuff);
forInLoop(stuff);
doWhileLoop(stuff);