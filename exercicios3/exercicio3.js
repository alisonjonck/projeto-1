
quandoClicar()


function quandoClicar() {
    var numeros = [
        123,
        321,
        987,
        999,
        9999
    ]
    
    var maiorNumero = 0
    
    for(var n = 0; n < 5; n++) {
    
        if (numeros[n] > maiorNumero) {
            maiorNumero = numeros[n]
        }
    
        console.log(maiorNumero)
        
    }
    
    console.log('o maior numero é:', maiorNumero)    
}