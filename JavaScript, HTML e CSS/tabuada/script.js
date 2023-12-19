function tabuada () {

// Capturando os elementos do HTML para JS
    var numero2 = window.document.getElementById("numero")
    var tab = window.document.getElementById("seltab")

// Garantindo que não fica em brando
    if (numero2.value.length == 0) {
        alert ("Digite um número válido")

    } else { 
// Tranformando o txt em num
        var numero = Number(numero2.value)

// Garante que apaga o conteúdo antes de uma nova verificação
        tab.innerHTML = ''

// Repetidor for
        for (var multi = 1; multi <= 10; multi++) {
// Cria dinamicamente a variavel item que recebe a tag OPTION (que é o interior da TAG Select)            
            var item = document.createElement ('option')
// item.text quer dizer o interior da caixa Select            
            item.text = `${numero} X ${multi} = ${numero*multi}`
// para exibir o resultado dentro da caixa Select (que é o tab)            
            tab.appendChild(item)
            
        }
        

   }



}

/*while (c<=10) {
    var item = document.createElement ('option')
    item.text = `${numero} X ${c} = ${numero*c}`
    tab.appendChild(item)
    c++
}*/