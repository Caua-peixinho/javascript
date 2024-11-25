function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msg2 = window.document.getElementById('boasvindas')
    var agora = new Date()
    //var hora = agora.getHours()
    var hora = 7
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 6 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#d3ccb5'
        msg2.innerHTML = 'Bom Dia!'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#78818a'
        msg2.innerHTML = 'Boa Tarde!'
    } else if (hora >= 18) {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#0a3849'
        msg2.innerHTML = 'Boa Noite!'
    } else {
        //BOA MADRUGADA!
        img.src = 'fotomadruga.png'
        document.body.style.background = '#0a111d'
        msg2.innerHTML = 'Boa Madrugada!'
    }
}
