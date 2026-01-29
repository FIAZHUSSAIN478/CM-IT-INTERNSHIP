let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^(?=.*\d).{6,}$/;

function showError(input, message) {
    input.nextElementSibling.innerText = message;
}

    document.querySelector(".SignUpForm").addEventListener("submit", function (e) {
    //  console.log(e);
    e.preventDefault();

    isValid = true;
    let errors = document.querySelectorAll(".error");

    for (let i = 0; i < errors.length; i++) {
        errors[i].innerText = "";
    }

    let myName = document.querySelector(".name");
    let myEmail = document.querySelector(".email");
    let myPassword = document.querySelector(".password");

    if (myName.value.trim() == "") {
        showError(myName, "Name is required");
        isValid = false;
    }

    if (myEmail.value.trim() == "") {
        showError(myEmail, "Email is required");
        isValid = false;
    }
    else if (!emailRegex.test(myEmail.value)) {
        showError(myEmail, "invalid email format");
        isValid = false;
    }

    if (myPassword.value.trim() == "") {
        showError(myPassword, "Password is required")
        isValid = false
    }
    else if (!passwordRegex.test(myPassword.value)) {
        showError(myPassword, "Password must be at least 8 characters long and contain at least one number");
        isValid = false
    }

    if (isValid) {
        localStorage.setItem("Name", myName.value);
        localStorage.setItem("Email", myEmail.value);
        localStorage.setItem("Password", myPassword.value);
     
        console.log("Name:", myName.value);
        console.log("Email:", myEmail.value);
        console.log("Password:", myPassword.value);
        alert("Form is Submitted ");
        location.reload();
    }


})

function showSaveData() {
    let savedData = document.querySelector(".saveData");
    let getName = localStorage.getItem("Name");
    let getEmail = localStorage.getItem("Email");
    let getPassword = localStorage.getItem("Password");

if (savedData) {
    if (getName && getEmail && getPassword) {
        savedData.innerHTML = `
              <h3>Save Data</h3>
                <p>Name:${getName}</p>
                <p>Email:${getEmail}</p>
                <p>Password:${getPassword}</p
            `;
    }
}
}



document.querySelector(".reset").addEventListener("click",function(){
    localStorage.removeItem("Name");
    localStorage.removeItem("Email");
    localStorage.removeItem("Password");
    location.reload();
})




showSaveData();