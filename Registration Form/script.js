let form = document.querySelector(".form");
let submit = document.querySelector(".button");
let errorMessages = Array.from(document.querySelectorAll(".error-message"));
let emptyFields = document.querySelectorAll(".empty-field");
let pwdShowBtn = document.querySelector(".btn");
let fnTarget, lnTarget, emTarget, pwdTarget;
let firstName, lastName, email, password;

for(let err of errorMessages){
    err.classList.add("d-none");
}
for(let empt of emptyFields){
    empt.classList.add("d-none");
}

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^([a-z0-9]|[\.\_\-]+[a-z0-9])+@[a-z0-9\.\_\-]+[a-z]$/i;
let passwordRegex = /[a-z0-9!-\/:-@[-`{-~]{8,256}/i;

form.addEventListener("keyup", (event) => {
    event.preventDefault();
    switch(event.target.dataset.key){
        case "firstName":
            firstName = event.target.value;
            fnTarget = event.target;
            break;
        case "lastName":
            lastName = event.target.value;
            lnTarget = event.target;
            break;
        case "email":
            email = event.target.value;
            emTarget = event.target;
            break;
        case "password":
            password = event.target.value;
            pwdTarget = event.target;
            break;
        default:
            firstName = lastName = email = password = "";
    }
});

submit.addEventListener("click", (event)=>{
    event.preventDefault();
    console.log(firstName, lastName, email, password);
    let f1, f2, f3, f4;
    f1 = validate(firstName, nameRegex, [errorMessages[0]], emptyFields[0], fnTarget);
    f2 = validate(lastName, nameRegex, [errorMessages[1]], emptyFields[1], lnTarget);
    f3 = validate(email, emailRegex, [errorMessages[2]], emptyFields[2], emTarget);
    f4 = validate(password, passwordRegex, errorMessages.slice(3), emptyFields[3], pwdTarget);

    if(f1 && f2 && f3 && f4){
        fnTarget.value = lnTarget.value = pwdTarget.value = emTarget.value = "";
        window.location.href = "/success.html";
    }
})

function validate(value, regex, errorMessages, emptyField, target){
    let flag = true;
    if(value){
        if(!regex.test(value)){
            for(let err of errorMessages){
                err.classList.remove("d-none");
            }
            target.classList.add("error");
            flag = false;
        }
        else{
            for(let err of errorMessages){
                err.classList.add("d-none");
            }
            target.classList.remove("error");
        }
        emptyField.classList.add("d-none");
    }
    else{
        emptyField.classList.remove("d-none");
    }
    return flag
}

pwdShowBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    if (pwdTarget.getAttribute("type") == "text"){
        pwdTarget.setAttribute("type", "password");
    }
    else{
        pwdTarget.setAttribute("type", "text");
    }

})