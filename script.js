function loading() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var date = new Date()
    var hours = date.getHours()
    msg.innerHTML = `Agora são ${hours} horas`

    if (hours >= 0 && hours < 12) {
        // BOM DIA
        img.src = 'photos/fotomanha.png'
        document.body.style.background = '#add8e6'
    } else if (hours >= 12 && hours <= 18) {
        // BOA TARDE
        img.src = 'photos/fototarde.png'
        document.body.style.background = '#ffa500'
    } else {
        // BOA NOITE
        img.src = 'photos/fotonoite.png'
        document.body.style.background = '#191970'
    }


}

