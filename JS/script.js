function validate(){
    var mail= document.logInForm.txtEmail.value;
    var pass= document.logInForm.txtPswd.value;
    var atSymbol= mail.indexOf("@");
    var dot = mail.indexOf(".");

    if(pass.match(/[a-z]/g) && pass.match(/[A-Z]/g) && pass.match(/[0-9]/g) && pass.match(/[^a-zA-Z\d]/g) && pass.length >= 8 ) {
        alert("success");
        document.logInForm.txtPswd.focus();
        return true;
    }
    
    
    else{
        alert("password must contain atleast one uppercase one lowercase one numeric one special charecter & minimum 8 charecter");
        document.logInForm.txtPswd.focus();
        return false;
    }
    
    
}