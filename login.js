let usernameVar;
let passwordVar;

function login() {
    var username = document.getElementById('username');
    usernameVar = username.value;
    var password = document.getElementById('password');
    passwordVar = password.value;
    localStorage.setItem("username", usernameVar);
    window.location.href = "./homepage.html";
}