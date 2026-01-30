let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^(?=.*\d).{8,}$/;


function showError(input, message) {
    input.parentElement.lastElementChild.innerText = message;
}


document.querySelector(".SignUpForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;


    let errors = document.querySelectorAll(".error");
    for (let i = 0; i < errors.length; i++) {
        errors[i].innerHTML = "";
    }

    let myName = document.querySelector(".name");
    let myEmail = document.querySelector(".email");
    let myPassword = document.querySelector(".password");
    let myAge = document.querySelector(".age")
    let myCommentMassage = document.querySelector(".commentMassage");
    let myCheckbox = document.querySelector(".checkboxCheck")


    if (myName.value.trim() == "") {
        showError(myName, "Name is Require");
        isValid = false
    }
    if (myEmail.value.trim() == "") {
        showError(myEmail, "Email is Required");
        isValid = false;
    }
    else if (!emailRegex.test(myEmail.value)) {
        showError(myEmail, "Email format is not valid")
        isValid = false;
    }

    if (myPassword.value.trim() == "") {
        showError(myPassword, " Password is Required");
        isValid = false;
    }
    else if (!passwordRegex.test(myPassword.value)) {
        showError(myPassword, "password should bhe at leats 8 chracter and one number")
        isValid = false;
    }

    if (myAge.value.trim() == "") {
        showError(myAge, "Age is Required");
        isValid = false;
    }
    else if (myAge.value <= 0) {
        showError(myAge, "Age should be positive number");
        isValid = false;
    }

    if (myCommentMassage.value.trim() == "") {
        showError(myCommentMassage, "Write a Massage");
        isValid = false;
    }
    if (!myCheckbox.checked) {
        showError(myCheckbox, "CheckBox is Requires");
        isValid = false;
    }

    if (isValid) {
        localStorage.setItem("Name", myName.value);
        localStorage.setItem("Email", myEmail.value);
        localStorage.setItem("Password", myPassword.value);
        localStorage.setItem("Age", myAge.value)
        localStorage.setItem("CommentMassage", myCommentMassage.value);
        localStorage.setItem("Checked", myCheckbox.checked);


        console.log("Name", myName.value);
        console.log("Email", myEmail.value);
        console.log("Password", myPassword.value);
        console.log("Age", myAge.value);
        console.log("CommentMassage", myCommentMassage.value);
        console.log("Checked", myCheckbox.checked);

        alert("form is submitted");
        location.reload();

    }

});
function showData() {


    let saveData = document.querySelector(".saveData");
    let saveName = localStorage.getItem("Name");
    let saveEmail = localStorage.getItem("Email");
    let savePassword = localStorage.getItem("Password");
    let saveAge = localStorage.getItem("Age");
    let saveComment = localStorage.getItem("CommentMassage");
    let saveCheckBox = localStorage.getItem("Checked");

    if (saveData) {
        if (saveName && saveEmail && savePassword && saveAge && saveComment && saveCheckBox) {
            saveData.innerHTML = `
        
       <h2>saved data is that </h2>
       <p>Name :${saveName}</p>
       <p>Email : ${saveEmail} </p>
       <p>Password : ${savePassword}</p>
       <p>Age : ${saveAge} </p>
       <p>CommentMassage : ${saveComment} </p>
       <p>CheckBox : ${saveCheckBox}</p>
        `;
        }
    }
    else {
        saveData.innerHTML = "<p>No data saved yet.</p>";


    }


    document.querySelector(".reset").addEventListener("click", function () {
        localStorage.clear();
        location.reload();
    })}

showData();