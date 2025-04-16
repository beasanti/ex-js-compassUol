//multiples of 3: 3, 6, 9
//miltiples of 5: 5, 10, 15
//soma dos mult 3 e 5


console.log(sum(10))

function sum(limit) {
    let sum = 0

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i

        return sum
}