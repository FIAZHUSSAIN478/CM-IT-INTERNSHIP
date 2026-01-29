

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^(?=.*\d).{6,}$/;

function showError(input, message) {
    input.nextElementSibling.innerText = message;
}

document.querySelector(".SignUpForm").addEventListener("submit", function (e) {
    e.preventDefault();
    isValid = true;
    let errors = document.querySelectorAll(".error");

    for (let i = 0; i < errors.length; i++) {
        errors[i].innerHTML = "";
    }

    let myName = document.querySelector(".name");
    let myEmail = document.querySelector(".email");
    let myPassword = document.querySelector(".password");

    if (myName.value.trim() == "") {
        showError(myName, "name is required");
        isValid = false;
    }

    if (myEmail.value.trim() == "") {
        showError(myEmail, "email is required");
        isValid = false;
    }
    else if (!emailRegex.test(myEmail.value)) {
        showError(myEmail, "email format is invalid");
        isValid = false;
    }
    if (myPassword.value.trim() == "") {
        showError(myPassword, "password is required");
        isValid = false
    }
    else if (!passwordRegex.test(myPassword.value)) {
        showError(myPassword, "password must be at least 8 character and one number"
        )
        isValid = false;
    }

    if (isValid) {

        // add user new list after submit of form

        let users = JSON.parse(localStorage.getItem("users")) || [];
        
        let isDuplicate=users.some(user=>user.email===myEmail.value);
        if(isDuplicate){
            showError(myEmail,"this Email is already store");
            return;
        }

       
        let NewUser = {
            name: myName.value,
            email: myEmail.value,
            password: myPassword.value
        }
        users.push(NewUser);


        localStorage.setItem("users", JSON.stringify(users));
        alert("form is submitted");
        location.reload();
    }

})


function showSaveData() {
    let savedData = document.querySelector(".saveData");
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (savedData && users.length > 0) {
        savedData.innerHTML = "<h3>Saved Data</h3>";

        users.forEach((user, index) => {
            savedData.innerHTML += `
                <p><b>${index + 1}</b></p>
                <p>Name: ${user.name}</p>
                <p>Email: ${user.email}</p>
                <p>Password: ${user.password}</p>
                <hr>
            `;
        }
        )
    }
}


document.querySelector(".reset").addEventListener("click", function () {
    localStorage.clear();
    location.reload();
})

showSaveData();