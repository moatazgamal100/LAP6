var user = document.querySelector("#user");
var passw = document.querySelector("#pass");
var btnLogin = document.querySelector("#btLogin");
btnLogin.addEventListener("click", function () {
    if (user.value == "admin" && passw.value == 123) {
        console.log(true);
        alert("Welcome");
    }
    else {
        alert("not registerd");
    }
})




