var paymentID = document.getElementById('idError');
var paymentAmount = document.getElementById('paymentError');
var submitError = document.getElementById('submiterror');

function validateID(){
    var id = document.getElementById('paymentID').value;
    if(id.length == 0){
        paymentID.innerHTML = 'Payment ID is required ';
        return false;
    }

    paymentID.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>'
    return true;
}

function validateAmount(){

    var amount = document.getElementById('paymentAmount').value;
    if(amount.length == 0){
        paymentAmount.innerHTML = 'please enter valid Amount ';
        return false;
    }

    if( amount != 200 ){
        paymentAmount.innerHTML = 'please enter valid Amount ';
        return false;
    }

    paymentAmount.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>'
    return true;

}

function validateForm(){

    if( !validateAmount() || !validateID() ){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none'}  , 3000);
        return false;
    }

}