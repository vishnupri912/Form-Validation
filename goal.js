 const nameError=document.getElementById("nameError");
 const emailError=document.getElementById("emailError");
 const passwordError=document.getElementById("passwordError");
 const submitBtn=document.getElementById("submitBtn");

 submitBtn.addEventListener("click",function(e){
     e.preventDefault();
     if(validatedName() && validatedEmail() && validatedPassword()){
        alert("Form is successfully submitted");

        signupForm.reset();

        name.innerHTML="";
        email.innerHTML="";
        password.innerHTML="";

        setTimeout(function(){
            nameError.previousElementSibling.classList.remove("fa-check","fa-xmark");
            emailError.previousElementSibling.classList.remove("fa-check","fa-xmark");
            passwordError.previousElementSibling.classList.remove("fa-check","fa-xmark");
        },500)

     }
 })



 function validatedName(){
    let name=document.getElementById("name").value;
    if(name.length===0){
        nameError.innerHTML="Name is required";
        nameError.previousElementSibling.classList.add("fa-xmark");
        return false;//stop running
    }
    if(!name.match(/^[A-Za-z]+(?:\s+[A-Za-z]+)+$/)){
        nameError.innerHTML="Write full name";
        nameError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }

    nameError.innerHTML="";
    nameError.previousElementSibling.classList.add("fa-check");
    return true;
 }

 function validatedEmail(){
    email=document.getElementById("email").value;
    if(email.length===0){
        emailError.innerHTML="Email is required";
        emailError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)){
        emailError.innerHTML="Write correct email";
        emailError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }

    emailError.innerHTML="";
    emailError.previousElementSibling.classList.add("fa-check");
    return true;
 }

 function validatedPassword(){
    password=document.getElementById("password").value;
    if(password.length===0){
        passwordError.innerHTML="Password is required";
        passwordError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
        passwordError.innerHTML="Write correct password";
        passwordError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    passwordError.innerHTML="";
    passwordError.previousElementSibling.classList.add("fa-check");
    return true;
 }

