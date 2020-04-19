let email = document.getElementById("email");
let emailerror = document.getElementById("email-error");
let number = document.getElementById("phone-number");
let phoneerror = document.getElementById("phone-error");
let password = document.getElementById("password");
let passworderror = document.getElementById("password-error");
let confirmpassword = document.getElementById("confirm-password");
let confirmerror = document.getElementById("confirm-error");
let passwordstrength = document.getElementById("password-strength");
// let passwordstrengthmeter = document.getElementById("password-strength-meter");

var strength = {
    0: "Worst ☹",
    1: "Bad ☹",
    2: "Weak ☹",
    3: "Good ☺",
    4: "Strong ☻"
}

function validateEmail(){

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(mailformat.test(email.value))
    {
        email.style.border = "2px solid green";
        return true;
    }
    else
    {
        email.style.border ="2px solid red";
        emailerror.innerHTML ="Email is Invalid";
        emailerror.style.color ="red";
        return false;
    } 
}

function validatePhone(){

    var phonenumber = /^\(?([1-9]{1}[0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(phonenumber.test(number.value))
    {
        number.style.border = "2px solid green";
        return true;
    }
    else
    {
        number.style.border ="2px solid red";
        phoneerror.innerHTML ="Email is Invalid";
        phoneerror.style.color ="red";
        return false;
    }
}

function validatePassword(){

    var passwordexp=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(passwordexp.test(password.value)) 
    { 
        password.style.border ="2px solid green";
        passworderror.innerHTML = "Password is Good ☺";
        passworderror.style.color = "green";
        return true;
    }
    else
    {  
        password.style.border ="2px solid red";
        passworderror.innerHTML = "Password is Bad ☹";
        passworderror.style.color = "red";
        return false;
    }
}

function validateCheckPassword(){
    if (password.value == confirmpassword.value)
    {
        confirmpassword.style.border ="2px solid green";
        confirmerror.innerHTML = "Password Matched ☺";
        confirmerror.style.color = "green";
        return true;
    }
    else
    {
        confirmpassword.style.border ="2px solid red";
        confirmerror.innerHTML = "Password Unmatched ☹";
        confirmerror.style.color = "red";
        return false; 
    }
}

// password.addEventListener('keyup', function(){
//     passwordstrength();
// })
// function passwordstrength(){
//     var val = document.getElementById("password").value;
//     var passwordexp1=  /^(?=.*\d)(?=.*[^a-zA-Z0-9]){8,15}$/;
//     var passwordexp2=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]){8,15}$/;
//     var counter=0;

//     if (val !=="")
//     {
//         if (passwordexp1.test(password.value))
//         counter = 1;
//         if (passwordexp2.test(password.value))
//         counter = 2;
//         if(passwordexp.test(password.value))
//         counter = 3;

//         if (counter == 1){
//             passwordstrength.innerHTML="Password is Weak ☹";
//             passwordstrength.style.color = "red";
//         }
//         if (counter == 2){
//             passwordstrength.innerHTML="Password is Medium ☺";
//             passwordstrength.style.color = "yellow";
//         }
//         if (counter == 3){
//             passwordstrength.innerHTML="Password is Strong ☻";
//             passwordstrength.style.color = "green";
//         }
//     }
// }
