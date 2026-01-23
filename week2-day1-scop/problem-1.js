/// palindron without using reverse

function palindrome(str) {
    let forward = "";
    let reverse = ""
    for (let i = 0; i < str.length; i++) {
        forward = forward + str[i];
    }
    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i]
    }
    if (forward === reverse) {
        console.log("is palindrome");
    } else {
        console.log("not palindrome")
    }

}
palindrome("level");

