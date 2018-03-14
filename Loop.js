// 1. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
for(let i=0; i <= 20; i++) {
	if(i % 2 === 0) {
		console.log(i + " is even")} else {
			console.log(i + " is odd")
		}
}

// 2. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for(let i=1; i <= 100; i++) {
	if(i % 3){
		console.log("Fizz")} else if(i % 5){
			console.log("Buzz")	} else if(i % 3 && i & 5){
				console.log("FizzBuzz")} else {
					console.log(i)
				}
}

// 3. Write a JavaScript program to construct the following pattern.
// X
// XX
// XXX
// XXXX
// XXXXX
let letter = "x";

while(letter.length <= 5) {
	console.log(letter);
	letter = letter + "x";
}


// 4. Create a loop that "sings" the song 99 bottles of beer on the wall. 
for(let i=99; i >= 0; i--)
	console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around, " + i-1 + " bottles of beer on the wall")







