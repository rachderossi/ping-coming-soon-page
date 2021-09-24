function EmailValidation(){

    let emailAddress = document.getElementById("email").value;
    let validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    console.log(emailAddress);
    if(emailAddress == "") {
        document.getElementById('errorMessage').innerHTML = "Whoops! It looks like you forgot to add your email.";
        document.getElementById("email").style.border = "1px solid red";
        return false;
    }
    else if (!emailAddress.match(validEmail)) {
        document.getElementById('errorMessage').innerHTML = "Please enter a valid email address.";
        document.getElementById("email").style.border = "1px solid red";
        return false;
    }

    else if (emailAddress.match(validEmail)) {
        document.getElementById('errorMessage').innerHTML = "Demo only. No form was posted.";
        document.getElementById("email").style.border = "1px solid green";
        return false;
    }
};





