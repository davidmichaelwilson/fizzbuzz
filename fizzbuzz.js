const number = 1000

const fizzBuzz = number => {
	for (let i = 1; i <= number; i++) {
		if(i % 7 === 0 && i % 13 === 0) {
			console.log("FizzBuzz")
		} else if (i % 7 === 0) {
			console.log("Fizz")
		} else if (i % 13 === 0) {
			console.log("Buzz")
		} else {
			console.log(i)
		}
	}
}

fizzBuzz(number)