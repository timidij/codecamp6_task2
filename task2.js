// Prints the characters of a string in reverse order.
function reversePrint(str) {
	if (str == null) {
		console.log(str);
		return;
	}
	const s = String(str);
	let word = '';
	let length  = s.length -1 

	for (let i = length; i >= 0; i--) {
		word += s[i];
	}

	console.log(word);
}

// 2)
// a) String data type is a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `). 
// Strings can contain letters, numbers, symbols, and whitespace.
//  They are commonly used for storing and manipulating textual 
//  data in programming.
// methods used on Strings
// 1. length: Returns the number of characters in a string.
// 2. toUpperCase(): Converts all characters in a string to uppercase.
// 3. toLowerCase(): Converts all characters in a string to lowercase.

// b) number is a data type that represents numeric values.
//  It can be an integer (whole number) or a floating point number (decimal).
// methods used on numbers
// 1. toFixed(n): Formats a number using fixed-point notation, rounding to n decimal places.
// 2. toExponential(n): Returns a string representing the number in exponential notation with n digits after the decimal point.
// 3. toPrecision(n): Returns a string representing the number to n significant digits.

function grading(score) {
	
	if (score >= 70) {
		console.log('Excellent');
	}
	else if (score >= 60) {
		console.log("Very good");
	}
	else if (score >= 50) {
		console.log('Good'	);
	}
	else if (score >= 40) {
		console.log('Poor'	);
	}
	else if (score >= 0) {
		console.log('Very poor'	);
	}
	else {
		console.log('Invalid score');
	}
	
}	

grading(49)
reversePrint('hello world');
reversePrint('hello');
reversePrint('');


