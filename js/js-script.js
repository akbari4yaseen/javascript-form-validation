const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordCheck = document.querySelector('#password-check')


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput()
})

function checkInput() {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordCheckValue = passwordCheck.value.trim()

    if (usernameValue === ''){
        // show error
        // add error class
        setErrorFor(username, 'Username is blank')
    } else if (usernameValue.length < 3){
        setErrorFor(username, 'Username must not be less than 3 characters')
    } else {
        // add success class
        setSuccessfor(username)
    }


    if (emailValue === ''){
        // show error
        // add error class
        setErrorFor(email, 'Email is blank')
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid')
    
    } else {
        // add success class
        setSuccessfor(email)
    }

    if (passwordValue === ''){
        // show error
        // add error class
        setErrorFor(password, 'Password is blank')
    } else if (!isValidPassword(passwordValue)){
        setErrorFor(password, "A combined password  between 8 to 32 characters")
    } else {
        // add success class
        setSuccessfor(password)
    }

    if (passwordCheckValue === ''){
        // show error
        // add error class
        setErrorFor(passwordCheck, 'Password Check is blank')
    } else if(passwordCheckValue !== passwordValue){
        setErrorFor(passwordCheck, 'Passwords does not match')
    } else {
        // add success class
        setSuccessfor(passwordCheck)
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement // .form-control
    const small = formControl.querySelector('small')
    small.innerText = message

    // add  error class 
    formControl.className = 'form-control error'
}

function setSuccessfor(input){
    const formControl = input.parentElement // .form-control
    formControl.className = 'form-control success'
}


function isEmail(email){
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)
}

function isValidPassword(pass){
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/.test(pass)
}