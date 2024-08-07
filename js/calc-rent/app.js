let rahn = document.querySelector('#rahn')
let ejare = document.querySelector('#ejare')
let form = document.querySelector('form')
let result = document.querySelector('.result')

eventListeners()
function eventListeners(){
    form.addEventListener('submit',calcCommision)
}


function calcCommision(e) {
    e.preventDefault()
    let calc = ((+rahn.value * 30000) + (+ejare.value)) / 4
    console.log(calc)
    console.log(window.location.hostname)
}
