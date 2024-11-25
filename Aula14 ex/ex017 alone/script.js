function tabuada() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('[ERRO] digite um número válido')    //Tratar erro 
    } else {
        n = Number(num.value)
        c = 0
        
        tab.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text += `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}

