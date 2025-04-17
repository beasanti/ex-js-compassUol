// objeto de endereço com propriedades como:
// rua, cidade e código postal 
// mostrar com showAddress(address)


const address = {
    rua: "Rua das Pirâmides",
    cidade: "São Paulo",
    codpostal: 12944170
};

function showAddress(address) {
    for (let key in address)
    console.log(key, address[key])
}
showAddress(address)
