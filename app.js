let error = document.querySelector('.error')

let emailInput = document.getElementById('email')

let subscribeBtn = document.querySelector('.subscribe')

let container1 = document.querySelector('.container-1')

let container2 = document.querySelector('.container-2')
let dismissBtn = document.querySelector('.dismiss')
let confirm = document.querySelector('.confirmation')

let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // email validation character


window.addEventListener('unload',() => { // this will empty the input when the page is refreshed 
    emailInput.value = ''
})


subscribeBtn.addEventListener('click' , (e) => {

    try{
        if(emailInput.value.match(validRegex) && emailInput.value !== ''){
            showThanks()
            confirm.textContent = `A confirmation email has been sent to ${emailInput.value}. Please open it and click the button inside to confirm your subscribtion`
        }
        else{
           emailError()
            throw new Error('enter a valid email')
        }
    }
    catch(error){
        console.log('Enter a valid email' , error.message)
    }
})

dismissBtn.addEventListener('click',() => {
    container1.style.display = 'flex'
    emailInput.value = ''
    container2.style.display = 'none'
    removeError()
})

function emailError() {
     error.style.display = 'block'
    emailInput.style.backgroundColor = 'rgba(228, 25, 25, 0.307)'
}

function removeError() {
    error.style.display = 'none'
    emailInput.style.backgroundColor = 'white'
}

function showThanks() {
    container1.style.display = 'none'
    container2.style.display = 'flex'
}