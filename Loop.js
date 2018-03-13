// 1.
for(let i=0; i <= 20; i++) {
	if(i % 2 === 0) {
		console.log(i + " is even")} else {
			console.log(i + " is odd")
		}
}

// 2.
for(let i=1; i <= 100; i++) {
	if(i % 3){
		console.log("Fizz")} else if(i % 5){
			console.log("Buzz")	} else if(i % 3 && i & 5){
				console.log("FizzBuzz")} else {
					console.log(i)
				}
}