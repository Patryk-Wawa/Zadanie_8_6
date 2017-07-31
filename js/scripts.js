//scripts.js

var a = 2;
var b = 3;
var value = (a * a) + (2 * a * b) - (b * b);

if (value > 0) {
	console.log('Wynik dodatni');
} else if (value < 0) {
	console.log('Wynik ujemny');
} else { 
	console.log('Wynik równy ZERO');
}