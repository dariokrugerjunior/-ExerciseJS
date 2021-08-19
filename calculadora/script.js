function calculo() {
    var num01 = parseInt(document.getElementById("num01").value)
    var num02 = parseInt(document.getElementById("num02").value)
    var res = document.querySelector('div#res')
    var option = document.querySelector('input[name="radioChoice"]:checked').value;
    var verification = new Boolean(false);
    var result = 0;

    if (!(num01 && num02)) {
        res.innerHTML = `Favor colocar algum valor para fazer a operação`
    } else if (num02 == 0 && option == "div") {
        res.innerHTML = `Não pode dividir nenhum numero por 0`
    } else {
        verification = true;
    }


    if (verification == true) {
        if (option == "som") {
            result = (num01 + num02)
        } else if (option == "sub") {
            result = (num01 - num02)
        } else if (option == "mul") {
            result = (num01 * num02)
        } else {
            result = (num01 / num02)
        }
        res.innerHTML = `Seu resultado é = ${result}`
    }
}



