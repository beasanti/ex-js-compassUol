
let address1 = new Addres ('a','b','c')
let address2 = new Addres ('a','b','c')
let address3 = address1


function Addres(rua, cidade, codpostal){
    this.rua = rua,
    this.cidade = cidade,
    this.codpostal = codpostal,
    this.result = function(){
        console.log(`Rua: ${rua}, Cidade: ${cidade}, CEP: ${codpostal}`)
    }
}

function areEqual(address1, address2){
    return (
        address1.rua === address2.rua &&
        address1.cidade === address2.cidade &&
        address1.codpostal === address2.codpostal
    )
}

function areSame(address1, address2){
    return address1 === address2
}

// Testes:
console.log("areEqual:", areEqual(address1, address2)); // true
console.log("areSame:", areSame(address1, address2));   // false
console.log("areSame (mesmo objeto):", areSame(address1, address3)); // true
