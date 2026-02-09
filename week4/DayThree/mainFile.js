let emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
let phRegex = /^03[0-9]{9}$/;
let nameRegex = /^[A-Za-z ]+$/;

let myName = document.querySelector(".name");
let myAge = document.querySelector(".age");
let myEmail = document.querySelector(".email");
let myContact = document.querySelector(".contact");
let error = document.querySelector(".error");

function showError(input, message) {
    input.parentElement.querySelector(".error").innerText = message;
}

document.querySelector(".mainForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let errors = document.querySelectorAll(".error");

    for (let i = 0; i < errors.length; i++) {
        errors[i].innerText = "";
    }

    let isValid = true;


    if (myName.value.trim() === "") {
        showError(myName, "Name is Required")
        isValid = false;
    }
    else if (!nameRegex.test(myName.value)) {
        showError(myName, "Only Use Alphabets");
        isValid = false;
    }

    if (myAge.value.trim() === "") {
        showError(myAge, "Age is Required");
        isValid = false;
    }
    else if (myAge.value <= 0) {
        showError(myAge, "Age must be greater than 0")
        isValid = false;
    }

    if (myContact.value.trim() === "") {
        showError(myContact, "Contact is Required");
        isValid = false;
    }
    else if (!phRegex.test(myContact.value)) {
        showError(myContact, "03---------");
        isValid = false;
    }


    if (myEmail.value.trim() === "") {
        showError(myEmail, "Email is Required");
        isValid = false;
    }
    else if (!emailRegex.test(myEmail.value)) {
        showError(myEmail, "email format is wrong")
        isValid = false
    }

    if (isValid) {
        let userData = {
            name: myName.value,
            age: myAge.value,
            email: myEmail.value,
            phone: myContact.value
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        let data = JSON.parse(localStorage.getItem("userData"));


        console.log(data.name);
        console.log(data.age);
        console.log(data.email);
        console.log(data.phone);

    }


});