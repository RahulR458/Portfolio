const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};


var nameError = document.getElementById("name-error" )
var phoneError = document.getElementById("phone-error")
var emailError = document.getElementById("email-error")
var messageError = document.getElementById("message-error")
var submitError = document.getElementById("submit-error")

function validateName(){
    var name = document.getElementById("contact-name").value;
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        document.getElementById('contact-name').style.border = '1px solid red'
        return false
    }
    if(name.length < 3){
        nameError.innerHTML= "minimum 3 characters"
        document.getElementById('contact-name').style.border = '1px solid red'
        return false;
    }
    if(!name.match(/^[A-Za-z]*[A-Za-z]*(\s{1,}[A-Za-z]*)*$/)){
        nameError.innerHTML = "invalid name";
        document.getElementById('contact-name').style.border = '1px solid red'
        return false
    }
    nameError.innerHTML = "<i class='bx bxs-check-circle'></i>";
    document.getElementById('contact-name').style.border = '1px solid seagreen'
    return true;
}

function validateEmail(){
    var email = document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required"
        document.getElementById('contact-email').style.border = '1px solid red'
        return false
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "Invalid email"
        document.getElementById('contact-email').style.border = '1px solid red'
        return false
    }
    emailError.innerHTML = "<i class='bx bxs-check-circle'></i>";
    document.getElementById('contact-email').style.border = '1px solid seagreen'
    return true;
}

function validatePhone(){
    var phone = document.getElementById("contact-phone").value;

    if(phone.length === 0){
        phoneError.innerHTML = "Phone number is required"
        document.getElementById('contact-phone').style.border = '1px solid red'
        return false
    }
    if(phone.length !== 10){
        phoneError.innerHTML = "Phone number should be 10 digits"
        document.getElementById('contact-phone').style.border = '1px solid red'
        return false
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Only digits"
        document.getElementById('contact-phone').style.border = '1px solid red'
        return false
    }
    phoneError.innerHTML = "<i class='bx bxs-check-circle'></i>";
    document.getElementById('contact-phone').style.border = '1px solid seagreen'
    return true;
}

function validateMessage(){
    var message = document.getElementById("contact-message").value;
    var required = 30;
    var left = required - message.length;  
    
    if(left > 0){
        messageError.innerHTML = left + " More Characters required"
        document.getElementById('contact-message').style.border = '1px solid red'
        return false
    }
    messageError.innerHTML = "<i class='bx bxs-check-circle'></i>";
    document.getElementById('contact-message').style.border = '1px solid seagreen';
    return true
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block"
        submitError.innerHTML = "Please fix error";
        setTimeout(function(){submitError.style.display = "none";}, 3000);
        return false
    }
}