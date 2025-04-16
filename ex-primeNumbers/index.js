showPrimes(10);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) {
            console.log(number);
        }
    }
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0)
            return false; // só retorna false se for divisível
    }
    return true; // se não achar nenhum divisor, é primo
}
