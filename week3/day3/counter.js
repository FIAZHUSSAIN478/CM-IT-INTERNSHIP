let count = 0;


function UiUpdate() {
    document.querySelector("#count").innerHTML = count;
}

document.querySelector(".add").addEventListener('click', function () {
    count++;
    UiUpdate();
});

document.querySelector(".minus").addEventListener("click", function () {
    if (count > 0) {
        count--;
        UiUpdate();
    }
    console.log(count);

});

document.querySelector(".reset").addEventListener("click", function () {
    count = 0;
    UiUpdate();
});



function Add() {
    count++;
    console.log(count)
}