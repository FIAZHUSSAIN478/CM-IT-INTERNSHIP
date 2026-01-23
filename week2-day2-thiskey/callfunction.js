// call function
function Username(username) {
    this.username = username;
}

function createuser(email, password) {
    Username.call(this, "ali");
    this.email = email;
    this.password = password

}

function listuser(blood) {
    createuser.call(this, "ali@test.com", 234)
    this.blood=blood
}
const abc = new listuser(("O+"));
console.log(abc);

