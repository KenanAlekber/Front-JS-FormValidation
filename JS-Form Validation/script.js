const form = document.getElementById("form");

let isFormValid = false;

let usernameInput = document.getElementById("usernameInput");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let confirmPasswordInput = document.getElementById("confirmPasswordInput");
let error = document.getElementsByClassName("error");
let btn = document.getElementsByTagName("button");

form.addEventListener("submit", (e) => {
    let usernameVal = usernameInput.value.trim();
    let emailVal = emailInput.value.trim();
    let passwordVal = passwordInput.value.trim();
    let confirmPasswordVal = confirmPasswordInput.value.trim();


    let formData = {
        username: usernameVal,
        email: emailVal,
        password: passwordVal,
        confirmPassword: confirmPasswordVal,
    }

    checkUsername(usernameVal, 3, 15);
    checkEmail(emailVal);
    checkPassword(passwordVal, 6);
    checkPasswordEquality(passwordVal, confirmPasswordVal);
});


function checkUsername(value, min, max) {
    if (value.length < min) {
        error[0].innerText = "Username must be at least 3 characters";
        document.getElementById("usernameInput").style.Color = "red";
        usernameInput.style.border = "2px solid red";

    } else if (value.length > max) {
        error[0].innerText = "Username should be less than 15";
        usernameInput.style.border = "2px solid red";

    } else {
        // alert("Success");
        isFormValid = true;
        error[0].innerText = ""
        usernameInput.style.border = "2px solid black";
    }
}

function checkEmail(emailVal) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailVal)) {
        isFormValid = true;
        error[2].innerText = ""
        emailInput.style.border = "2px solid black";
    }
    else {
        isFormValid = false;
        error[2].innerText = "Email is not valid";
        emailInput.style.border = "2px solid red";
    }
}



function checkPassword(password, min) {
    if (password.length < min) {
        error[3].innerText = "Password must be at least 6 characters"
        passwordInput.style.border = "2px solid red";
        confirmPasswordInput.style.border = "2px solid red";
    } else {
        isFormValid = true;
        error[3].innerText = ""
        passwordInput.style.border = "2px solid black";
        confirmPasswordInput.style.border = "2px solid black";
    }
}

function checkPasswordEquality(password1, password2) {
    if (password1 === password2) {
        isFormValid = true;
        error[4].innerText = ""
        passwordInput.style.border = "2px solid black";
        confirmPasswordInput.style.border = "2px solid black";
    } else {
        isFormValid = false;
        error[4].innerText = "Password is not same";
        passwordInput.style.border = "2px solid red";
        confirmPasswordInput.style.border = "2px solid red";
    }
}