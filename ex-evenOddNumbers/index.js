// deve chamar todos os numeros e nomea-los se for impar ou par

showNumbers(15)

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++){
        let tipo = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, tipo)
    }
}

