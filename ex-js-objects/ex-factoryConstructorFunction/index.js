// function constructor
// function factory


//factory

function createAddres(rua, cidade, codpostal){
    return {
        rua,
        cidade,
        codpostal,
        result(){
            console.log(`Rua: ${rua}, Cidade: ${cidade}, CEP: ${codpostal}`)
        }
    }
}
const a1 = createAddres('rua das piranha','São paulo', 42844984)
a1.result()

//constructor

function Addres(rua, cidade, codpostal){
    this.rua = rua,
    this.cidade = cidade,
    this.codpostal = codpostal,
    this.result = function(){
        console.log(`Rua: ${rua}, Cidade: ${cidade}, CEP: ${codpostal}`)
    }
}

const aF = new Addres ('rua das piranha','São paulo', 42844984)