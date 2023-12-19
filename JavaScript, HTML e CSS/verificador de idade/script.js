function verificar() {

    var data = new Date()
    ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    if (fano.value.length == 0 || fano.value > ano) {

        alert("[ERRO] Verifique os dados inseridos")

    }

    else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        
        if (fsex[0].checked) {
            genero = "Homem"

            if (idade >= 0 && idade <=12) {
                // CRIANÇA
                img.setAttribute ("src", "masc/crianca.png")
            }

            else if (idade <= 21) {
                // JOVEM
                img.setAttribute ("src", "masc/jovem.png")
            }

            else if (idade <=45) {
                // ADULTO
                img.setAttribute ("src", "masc/adulto.png")
            }

            else {
                // IDOSO
                img.setAttribute ("src", "masc/idoso.png")
            }
        }

        else {
            genero = "Mulher"

            if (idade >= 0 && idade <=12) {
                // CRIANÇA
                img.setAttribute ("src", "fem/crianca.png")
            }

            else if (idade <= 21) {
                // JOVEM
                img.setAttribute ("src", "fem/jovem.png")
            }

            else if (idade <=45) {
                // ADULTO
                img.setAttribute ("src", "fem/adulto.png")

            }

            else {
                // IDOSO
                img.setAttribute ("src", "fem/idoso.png")
            }
        }

        res.style.textAlign ="center"
        res.innerHTML = `<p> Detectamos ${genero} com ${idade} anos.</p>`
         res.appendChild(img)

        }


    }