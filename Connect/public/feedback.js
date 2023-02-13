var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var textError = document.getElementById('textError');
var submitError = document.getElementById('submiterror')
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

function validateText()
{
   
    var text = document.getElementById('feedback').value;
    
    if( text.length == 0)
    {
        textError.innerHTML = "Please fill out this Field";
        return false;
    }

    if( text.length < 20  ){
        textError.innerHTML = 'Feedback is too short ';
        return false;
    }

    if( text.length > 100  ){
        textError.innerHTML = 'Feedback is too large ';
        return false;
    }

    textError.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>'
    return true;
}

function validateForm(){

    if( !validateName() || !validateText() || !validateEmail()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none'}  , 3000);
        return false;
    }

}