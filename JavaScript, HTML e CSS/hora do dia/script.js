function carregar () {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 8
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        msg.innerHTML = `Agora são ${hora} horas, bom dia!`
        img.src = "manha.png"
        window.document.body.style.background = "#cdba80"
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        msg.innerHTML = `Agora são ${hora} horas, boa tarde!`
        img.src = "tarde.png"
        window.document.body.style.background = "#d16004"
    } else {
        //BOA NOITE
        msg.innerHTML = `Agora são ${hora} horas, boa noite!`
        img.src = "noite.png"
        window.document.body.style.background = "#09181b"
    }
    
}

