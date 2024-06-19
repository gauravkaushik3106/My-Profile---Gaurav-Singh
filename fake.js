function clearErrors() {
    // Get all error divs with class 'classerror' and clear their content
    let errors = document.getElementsByClassName('classerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    // Set the error message for the specific input field
    let element = document.getElementById(id + "Error");
    element.innerHTML = error;
}

function containsDigits(name) {
    // Check if the name contains any digits
    return /\d/.test(name);
}

function validateForm() {
    let returnval = true;
    clearErrors();

    // Validate name
    let name = document.forms['myForm']['name'].value;
    if (name.length < 3) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }
    if (containsDigits(name)) {
        seterror("name", "Name cannot have digits");
        returnval = false;
    }

    // Validate email
    let email = document.forms['myForm']['email'].value;
    if (email.length > 40) {
        seterror("email", "Length of email is too long");
        returnval = false;
    } else {
        // Regular expression for basic email validation
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            seterror("email", "Enter a valid email address");
            returnval = false;
        }
    }

    // Validate subject
    let subject = document.forms['myForm']['subject'].value;
    if (subject.length > 50) {
        seterror("subject", "Length of subject is too long");
        returnval = false;
    }

    // Validate comments
    let comments = document.forms['myForm']['comments'].value;
    if (comments.length > 100) {
        seterror("comments", "Length of comments is too long");
        returnval = false;
    }

    return returnval;
}
