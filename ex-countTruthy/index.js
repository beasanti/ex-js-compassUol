
const array = [0, null, undefined, 2, "hello", false]

console.log(countTruthy(array))

function countTruthy(array) {
    let count = 0
    for (let value of array){
        if(value)
            count++
    }
    return count

}