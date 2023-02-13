var emailError = document.getElementById('emailError');
var password = document.getElementById('passError');
var submitError = document.getElementById('submitError')

function validateEmail(){

    var email = document.getElementById('email').value ; 

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if( !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;

    }

    emailError.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>'
    return true;

}
function validatePass(){
    var pass = document.getElementById('password').value;

    if( pass.length == 0){
        password.innerHTML = 'Password is required';
        return false;

    }

    password.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>'
    return true;

}

function validateForm(){

    if( !validateEmail() || !validatePass() ){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none'}  , 3000);
        return false;
    }

}