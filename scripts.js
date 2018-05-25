function addFour() {
	var fourString = "4";
	var fourInt = 4;
	console.log(fourString + fourInt);
	console.log("Yay, you logged a number, but 4 + 4 isn't 44...");
	console.log(fourInt + fourInt);
	return true;
}

function areStringsForNoobs() {
	if (!addFour()) {
		console.log("this is a string!!");
	} else { 
		console.log("Strings are for n00bs");
	}
}
