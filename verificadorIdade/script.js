function verification() {
    var date = new Date();
    var year = date.getFullYear();
    var formYear = document.getElementById("txtyear")
    var res = document.querySelector('div#res')

    if (formYear.value.length == 0 || Number(formYear.value) > year) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var formSex = document.getElementsByName("radsex")
        var age = year - Number(formYear.value)
        var gender = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'photos')
        img.style.width = "250px"
        img.style.width = "250px"
        img.style.borderRadius = "50%"
        if (formSex[0].checked) {
            gender = 'Homem'
            if (age >= 0 && age < 10) {
                //criança
                gender = 'Criança'
                img.setAttribute('src', '../photos/bebemenino.png')
            } else if (age < 24) {
                //jovem
                img.setAttribute('src', '../photos/homemjovem.png')
            } else if (age < 50) {
                //adulto
                img.setAttribute('src', '../photos/homemadulto.png')
            } else {
                //velho 
                img.setAttribute('src', '../photos/homemidoso.png')
            }

        } else {
            gender = 'Mulher'
            if (age >= 0 && age < 10) {
                //criança
                gender = 'Criança'
                img.setAttribute('src', '../photos/bebemenina.png')
            } else if (age >= 10) {
                //jovem
                img.setAttribute('src', '../photos/mulherjovem.png')
            } else if (age >= 24) {
                //adulto
                img.setAttribute('src', '../photos/mulheradulta.png')
            } else {
                //velho 
                img.setAttribute('src', '../photos/mulheridosa.png')
            }
        }
        res.innerHTML = `Detectamos ${gender} com ${age} anos.`
        res.appendChild(img)
    }
}

