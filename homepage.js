

window.onload = function() {
    username = localStorage.getItem('username');
    document.getElementById('username').innerHTML = "Welcome, " + username;
}