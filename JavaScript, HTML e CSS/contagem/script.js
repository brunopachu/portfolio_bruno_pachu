
// Criando a função
function contagem () {
    //Capturando os elementos do HTML para o JS
    var inicio = window.document.getElementById("inicio")
    var fim = window.document.getElementById("fim")
    var passo = window.document.getElementById("passo")
    var res = window.document.getElementById("res")

// Garantindo que os espaços não fiquem vazios
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Digite valores válidos."
    } else {
        res.innerHTML = "Contando... <br>"
// Transformando os inputs em número, pois eles sempre entram como str
        var inicio2 = Number(inicio.value)
        var fim2 = Number(fim.value)
        var passo2 = Number(passo.value)

// Garantindo que o número de passos é maior que zero        
        if (passo2 <= 0) {
            alert ("número de passos inválido")
        }
// Contagem Progressiva
        if (inicio2 < fim2) {
            for (var contador = inicio2; contador <= fim2; contador += passo2) {
                res.innerHTML += ` ${contador} 👉`
            }
// Contagem Regressiva
        } else { 
            for (var contador = inicio2; contador >= fim2; contador -= passo2) {
                res.innerHTML += ` ${contador} 👉`
            }
                }
    }

        res.innerHTML += "🏁"
    }