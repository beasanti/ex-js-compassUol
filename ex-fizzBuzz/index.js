//divisivel por 3 => Fizz
//divisivel por 5 => Buzz


function fizzBuzz(input) {
    if (typeof input !== 'number') 
        return  NaN
    if (input % 3 === 0 && input % 5 === 0) 
        return "FizzBuzz"
    if (input % 3 === 0) 
        return "Fizz"
    if (input % 5 === 0)
         return "Buzz"

    return input
}

const output = fizzBuzz('number')
console.log(output)