onload = todos()
function todos(){
    ttladi.style.display = ''
    ttlsub.style.display = ''
    ttlmult.style.display = ''
    ttldivi.style.display = ''
    tabadi.style.border = ''
    tabsub.style.border = ''
    tabmult.style.border = ''
    tabdivi.style.border = ''
    tabadi.innerHTML = ''
    tabsub.innerHTML = ''
    tabmult.innerHTML = ''
    tabdivi.innerHTML = ''
    if (num.value.length == 0){
        for ( let c = 1 ; c <= 10 ; c++ ){
            for ( let c2 = 1 ; c2 <= 10 ; c2++ ){
                tabadi.innerHTML += `${c} + ${c2} = ${c + c2}</br>`
                tabmult.innerHTML += `${c} x ${c2} = ${c * c2}</br>`
            }
            tabadi.innerHTML += '<p></p>'
            tabmult.innerHTML += '<p></p>'
        }
        for ( let c = 1 ; c <= 10 ; c++ ){
            for ( let c2 = c ; c2 <= 10 + c ; c2++ ){
                tabsub.innerHTML += `${c2} - ${c} = ${c2 - c}</br>`
            }
            tabsub.innerHTML += '<p></p>'
        }
        for ( let c = 1 ; c <= 10 ; c++ ){
            for ( let c2 = c ; c2 <= 10 * c ; c2 = c2 + c ){
                tabdivi.innerHTML += `${c2} &divide; ${c} = ${c2 / c}</br>`
            }
            tabdivi.innerHTML += '<p></p>'
        }
    } else {
        let n = Number(num.value)
        for ( let c = n ; c <= n ; c++ ){
            for ( let c2 = 1 ; c2 <= 10 ; c2++ ){
                tabadi.innerHTML += `${c} + ${c2} = ${c + c2}</br>`
                tabmult.innerHTML += `${c} x ${c2} = ${c * c2}</br>`
            }
            tabadi.innerHTML += '<p></p>'
            tabmult.innerHTML += '<p></p>'
        }
        for ( let c = n ; c <= n ; c++ ){
            for ( let c2 = c ; c2 <= 10 + c ; c2++ ){
                tabsub.innerHTML += `${c2} - ${c} = ${c2 - c}</br>`
            }
            tabsub.innerHTML += '<p></p>'
        }
        for ( let c = n ; c <= n ; c++ ){
            for ( let c2 = c ; c2 <= 10 * c ; c2 = c2 + c ){
                tabdivi.innerHTML += `${c2} &divide; ${c} = ${c2 / c}</br>`
            }
            tabdivi.innerHTML += '<p></p>'
        }
    }
}
function adicao(){
    ttladi.style.display = ''
    ttlsub.style.display = 'none'
    ttlmult.style.display = 'none'
    ttldivi.style.display = 'none'
    tabadi.style.border = ''
    tabsub.style.border = 'none'
    tabmult.style.border = 'none'
    tabdivi.style.border = 'none'
    tabadi.innerHTML = ''
    tabsub.innerHTML = ''
    tabmult.innerHTML = ''
    tabdivi.innerHTML = ''
    if (num.value.length == 0){
        for ( let c = 1 ; c <= 10 ; c++ ){
            for ( let c2 = 1 ; c2 <= 10 ; c2++ ){
                tabadi.innerHTML += `${c} + ${c2} = ${c + c2}</br>`
            }
            tabadi.innerHTML += '<p></p>'
        }
    } else {
        let n = Number(num.value)
        for ( let c = n ; c <= n ; c++ ){
            for ( let c2 = 1 ; c2 <= 10 ; c2++ ){
                tabadi.innerHTML += `${c} + ${c2} = ${c + c2}</br>`
            }
            tabadi.innerHTML += '<p></p>'
        }
    }
}
function subtracao(){
    ttladi.style.display = 'none'
    ttlsub.style.display = ''
    ttlmult.style.display = 'none'
    ttldivi.style.display = 'none'
    tabadi.style.border = 'none'
    tabsub.style.border = ''
    tabmult.style.border = 'none'
    tabdivi.style.border = 'none'
    tabadi.innerHTML = ''
    tabsub.innerHTML = ''
    tabmult.innerHTML = ''
    tabdivi.innerHTML = ''
    if (num.value.length == 0){
        for ( let c = 1 ; c <= 10 ; c++ ){
            for ( let c2 = c ; c2 <= 10 + c ; c2++ ){
                tabsub.innerHTML += `${c2} - ${c} = ${c2 - c}</br>`
            }
            tabsub.innerHTML += '<p></p>'
        }
    } else {
        let n = Number(num.value)
        for ( let c = n ; c <= n ; c++ ){
            for ( let c2 = c ; c2 <= 10 + c ; c2++ ){
                tabsub.innerHTML += `${c2} - ${c} = ${c2 - c}</br>`
            }
            tabsub.innerHTML += '<p></p>'
        }
    }
}
function multiplicacao(){
    ttladi.style.display = 'none'
    ttlsub.style.display = 'none'
    ttlmult.style.display = ''
    ttldivi.style.display = 'none'
    tabadi.style.border = 'none'
    tabsub.style.border = 'none'
    tabmult.style.border = ''
    tabdivi.style.border = 'none'
    tabadi.innerHTML = ''
    tabsub.innerHTML = ''
    tabmult.innerHTML = ''
    tabdivi.innerHTML = ''
    if (num.value.length == 0){
        for ( let c = 1 ; c <= 10 ; c++ ){
            for ( let c2 = 1 ; c2 <= 10 ; c2++ ){
                tabmult.innerHTML += `${c} x ${c2} = ${c * c2}</br>`
            }
            tabmult.innerHTML += '<p></p>'
        }
    } else {
        let n = Number(num.value)
        for ( let c = n ; c <= n ; c++ ){
            for ( let c2 = 1 ; c2 <= 10 ; c2++ ){
                tabmult.innerHTML += `${c} x ${c2} = ${c * c2}</br>`
            }
            tabmult.innerHTML += '<p></p>'
        }
    }
}
function divisao(){
    ttladi.style.display = 'none'
    ttlsub.style.display = 'none'
    ttlmult.style.display = 'none'
    ttldivi.style.display = ''
    tabadi.style.border = 'none'
    tabsub.style.border = 'none'
    tabmult.style.border = 'none'
    tabdivi.style.border = ''
    tabadi.innerHTML = ''
    tabsub.innerHTML = ''
    tabmult.innerHTML = ''
    tabdivi.innerHTML = ''
    if (num.value.length == 0){
        for ( let c = 1 ; c <= 10 ; c++ ){
            for ( let c2 = c ; c2 <= 10 * c ; c2 = c2 + c ){
                tabdivi.innerHTML += `${c2} &divide; ${c} = ${c2 / c}</br>`
            }
            tabdivi.innerHTML += '<p></p>'
        }
    } else {
        let n = Number(num.value)
        for ( let c = n ; c <= n ; c++ ){
            for ( let c2 = c ; c2 <= 10 * c ; c2 = c2 + c ){
                tabdivi.innerHTML += `${c2} &divide; ${c} = ${c2 / c}</br>`
            }
            tabdivi.innerHTML += '<p></p>'
        }
    }
}