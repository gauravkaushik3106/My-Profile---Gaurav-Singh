function clearErrors(){
    errors = document.getElementsByClassName('classerror');
    for(let item of errors){
        item.innerHTML = "";
    }
}

function seterror(id, error){
    element = document.getElementById(id + "Error");
    element.innerHTML = error;
}

function containsDigits(name){
    return /\d/.test(name);
}

function validateForm(){
    let returnval = true;
    clearErrors();

    let name=document.forms['myForm']['name'].value;
    if(name.length<3){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }
    if(containsDigits(name)){
        seterror("name", "*Name cannot have digits")
        returnval = false;
    }

    let email = document.forms['myForm']['email'].value;
    if(email.length>40){
        console.log("error in email");
        seterror("email", "Length of email is too long");
        returnval = false;
    }

    let subject = document.forms['myForm']['subject'].value;
    if (subject.length > 50) {
        seterror("subject", "*Length of subject is too long");
        returnval = false;
    }

    let comments = document.forms['myForm']['comments'].value;
    if(comments.length>100){
        seterror("comments", "*Length of comments is too long");
        returnval = false;
    }

    return returnval;
}