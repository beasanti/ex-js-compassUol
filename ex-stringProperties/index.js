
const filme = {
        nome:'Noite das brilhantina',
        lancamento: 2000,
        nota: 5,
        genero: 'romance'   
    }

showProperties(filme)

function showProperties(obj) {
    for(let key in obj)
        if(typeof obj[key] === 'string'){
            console.log(key, obj[key])
        }
}

