//calc a nota de um aluno em diferentes disciplinas 
// average = 70
// 1-59: F
// 60-69 : D
// 70-79 : C
// 80-89 : B
// 90-100 : A

const marks = [90, 90, 90]
const average = calculateAverage(marks)

console.log( "Sua média é: ", calculateGrade(marks))

function calculateAverage(arr){
    let sum = 0
    for (let value of arr)
        sum += value
     return  sum / arr.length
}

function calculateGrade(marks){

    if (average >= 0 && average <= 59)
        return "F"
    if (average >= 60 && average <= 69)
        return "D"
    if (average >= 70 && average <= 79)
        return "C"
    if (average >= 80 && average <= 89)
        return "B"
    if (average >= 90 && average <= 99)
        return "A"
}

