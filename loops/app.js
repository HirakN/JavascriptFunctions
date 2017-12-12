// prints 0-9
for (var i = 0; i < 10; i++) {
	console.log(i);
}

// prints 0-9
var x = 0;
while (x < 10) {
	console.log(x);
	x++;
}

// prints do something once
x = 20;
do {
	console.log("do something");
} while (x < 6)

// prints each element in array
var stuff = ["thing",2,3,4,5,6];
// for loops already nows size, i will store the list of indexes
for (var i in stuff) {
	console.log(stuff[i]);
}