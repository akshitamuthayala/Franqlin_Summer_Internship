
document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector('.btn-group button:nth-child(1)');
    const registerBtn = document.querySelector('.btn-group button:nth-child(2)');

    loginBtn.addEventListener("click", function () {
        console.log("Login button clicked - navigating to login page");
    });

    registerBtn.addEventListener("click", function () {
        console.log("Register button clicked - navigating to registration page");
    });
});
