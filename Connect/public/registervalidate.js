var nameError = document.getElementById('name-error')
var emailError = document.getElementById('email-error')
var numberError = document.getElementById('number-error')
var deptError = document.getElementById('dept-error')
var passError = document.getElementById('pass-error')
var confirmError = document.getElementById('confirmpass-error')
var submitError = document.getElementById('submit-error')


function validateName(){
    var name = document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required ';
        return false;
    }

   if( !name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/) )
    {
        nameError.innerHTML = 'Invalid Name ';
        return false;
    }
    
    nameError.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>'
    return true;
}

function validateContact(){
    var contact = document.getElementById('contact').value;
    if(contact.length == 0){
        numberError.innerHTML = 'Contact Number is required';
        return false;
    }

    if(contact.length != 10){
        numberError.innerHTML = 'Contact no should be 10 digits';
        return false;

    }
    if(!contact.match(/^[0-9]{10}$/)){
        numberError.innerHTML = 'Contact no is required';
        return false;
    }

    numberError.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>'
    return true;

}

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
function validateDept(){

    var dept = document.getElementById('department').value;

    if(dept.length == 0){
        deptError.innerHTML = 'Department is required';
        return false;
    }

    deptError.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>'
    return true;

}
function validatePass(){
    var password = document.getElementById('password').value;
    console.log(password)
    if(password.length == 0){
        passError.innerHTML = 'Password is required';
        return false;
    }

    passError.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>'
    return true;
    
}

function validateConfirm(){

    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirmpassword').value;

    if(password != confirm){
        confirmError.innerHTML = 'Password not Matching';
        return false;
    }

    confirmError.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>'
    return true;

}

function validateForm(){

    if( !validateName() || !validateEmail() || !validateContact || !validatePass() || !validateDept()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none'}  , 3000);
        return false;
    }

}