function isValid() {
    if (firstName() && 
       lastName() && 
       email() &&
       phoneNumber() &&
    )
    return true
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
};

LastName.addEventListener('blur', lastName, false)
function lastName(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var validLastname=false;

    //2) create variables to read the values from html text inputs
    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";

    //3) do the validation
    if (lastname==="null" || lastname==="" || lastname.length > 20 ) {
        errorMessages += "<p>The last name is required and cannot be greater than 20 characters</p>";
        console.log("Last name invalid — length")
        } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                validLastname = true;
                console.log("Last name valid")
        };


    //4) send error messages 
    document.getElementById("lname").innerHTML = errorMessages;

    //5) return the status of each field
    return (validLastname);
}

Email.addEventListener('blur', email, false)
function email(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var validEmail = false;

    //2) create variables to read the values from html text inputs
    var userEmail = document.getElementById("Email").value;
    var errorMessages = "";

    //3) do the validation
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
        errorMessages +=  "<p>Invalid email</p>";
        console.log("Email invalid")
    } else {
        validEmail = true;
        console.log("Email valid")
    }
        
    //4) send error messages 
    document.getElementById("email").innerHTML = errorMessages;

    //5) return the status of each field
    return (userEmail);
}

PhoneNumber.addEventListener('blur', phoneNumber, false)
function phoneNumber(){
    //1) create a variable to control status of each field. Assume that they are not valid
        var validPhoneNumber = false;

    //2) create variables to read the values from html text inputs
        var phone = document.getElementById("PhoneNumber").value;
        var errorMessages = "";

    //3) do the validation
    if (isNaN(phone) || phone.length >15 || phone===null || phone===""){
        errorMessages += "<p>Invalid phone number</p>";
        console.log("Invalid phone number")
    }
    else
      validPhoneNumber = true;

      //adding formatting for the validated number with dashes
      var newPhone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2")
    //4) send error messages 
    document.getElementById("pnumber").innerHTML = errorMessages;

    //5) return the status of each field
}