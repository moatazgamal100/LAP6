var user = document.querySelector("#user");
var passw = document.querySelector("#pass");
var btnLogin = document.querySelector("#btLogin");
btnLogin.addEventListener("click", function () {
    if (validation() == true) {
        console.log(true);
        alert("Welcome");
    }
    // if (user.value == "admin" && passw.value == 123) {
    //     console.log(true);
    //     alert("Welcome");
    // }
    else {
        checkError();
    }
})
let passRejex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,}$/
function validation() {
    return passRejex.test(passw.value);
}
function checkError() {
    let err = "";
    if (!passw.value.match(/[0-9]/)) {
        err += " At least one numbers, ";
    }
    if (!passw.value.match(/[a-z]/)) {
        err += " At least one small letters, ";
    }
    if (!passw.value.match(/[A-Z]/)) {
        err += " At least one capital letters, ";
    }
    if (passw.value.length < 8) {
        err += " AT least 8 characters ";
    }
    if (!err == "") {
        alert(`ERROR
        The password must contain(${err})`);
    }
    
}






