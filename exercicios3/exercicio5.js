function quandoClicar() {
    var objetoTeste = {
        xicara: 'Xicara é um objeto utilizado para beber',
        mouse: 'em inglês significa rato ou acessório do computador',
    }
    
    if (objetoTeste.mouse == undefined) {
        console.log('mouse não está cadastrado no dicionário')
    } else {
        console.log('O que significa mouse?', objetoTeste.mouse)
    }
    
    
    
    if (objetoTeste.microfone == undefined) {
        console.log('Microfone não está cadastrado no dicionário')
    } else {
        console.log('O que significa microfone?', objetoTeste.microfone)
    }
    
}

quandoClicar()