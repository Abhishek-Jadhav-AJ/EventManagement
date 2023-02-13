var nameError = document.getElementById('nameerror');
var deptError = document.getElementById('depterror');
var submitError = document.getElementById('submiterror');
var eventError = document.getElementById('eventerror');
var paymentError = document.getElementById('paymenterror');


function validateName(){
    var name = document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required ';
        return false;
    }

    nameError.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>'
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

function validateEvent(){
        var event = document.getElementById('eventname').value;
        if(event.length == 0 ){
            eventError.innerHTML = 'Event Name is required';
            return false;
        }

        eventError.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>'
        return true;

}

function validatePayment(){
    var status = document.getElementById('paymenttype');
    var text = status.options[status.selectedIndex].value;
    
    var check = 'Yes';
    
    console.log(text)
    
    if(text != check){
        paymentError.innerHTML = 'Payment is required';
        return false;
    }

    paymentError.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>'
        return true;

    
}

function validateForm(){

        if( !validateName() || !validateDept() || !validateEvent() || !validatePayment() ){
            submitError.style.display = 'block';
            submitError.innerHTML = 'Please fix error to submit';
            setTimeout(function(){submitError.style.display = 'none'}  , 3000);
            return false;
        }
    
    }