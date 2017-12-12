function inlineScript(value1) {
	var message = "Hello, World! " + value1;
	alert(message);
}

inlineScript("hirak naik");

function inlineScript2(value1) {
	var message = "Hello, World!" + value1;
	return message;
}

inlineScript2("hirak naik");

function inlineScript3(value1, value2) {
	var message = "Hello, World!" + value1 + " " + value2;
	return message;
}

var fname = inlineScript3("hirak", "naik");
alert(fname);

