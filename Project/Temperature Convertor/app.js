let celsiusInput = document.querySelector('#celsius > input')
let FaherenheitInput = document.querySelector('#Faherenheit > input')


let btn = document.querySelector('.button button')
function roundNumber(number){
    return Math.round(number*100)/100
}

celsiusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp*(9/5))+ 32
   

    FaherenheitInput.value = roundNumber(fTemp)
   
})

FaherenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(FaherenheitInput.value)
    let cTemp = (fTemp-32) * (5/9)


    celsiusInput.value = roundNumber(cTemp)
   
})

btn.addEventListener('click', ()=>{
    celsiusInput.value=""
    FaherenheitInput.value = ""
})