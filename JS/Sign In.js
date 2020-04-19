let username = document.getElementById("username");
let usererror = document.getElementById("user-error");
let password = document.getElementById("password");
let passworderror = document.getElementById("password-error");

function validateEmail(){

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phonenumber = /^\(?([1-9]{1}[0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(mailformat.test(username.value))
    {
        username.style.border = "2px solid green";
        return true;
    }
    else if(phonenumber.test(number.value))
    {
        username.style.border = "2px solid green";
        return true;
    }
    else{
        username.style.border ="2px solid red";
        usererror.innerHTML ="Username is Invalid";
        usererror.style.color ="red";
        return false;
    } 
}

function validatePassword(){

    var passwordexp=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(passwordexp.test(password.value)) 
    { 
        password.style.border ="2px solid green";
        passworderror.innerHTML = "Password is Correct ☺";
        passworderror.style.color = "green";
        return true;
    }
    else
    {  
        password.style.border ="2px solid red";
        passworderror.innerHTML = "Password is Incorrect ☹";
        passworderror.style.color = "red";
        return false;
    }
}