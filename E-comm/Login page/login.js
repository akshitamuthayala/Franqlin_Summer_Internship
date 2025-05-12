document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".login-btn");
    const usernameInput = document.querySelector('.input-box input[type="text"]');
    const passwordInput = document.querySelector('.input-box input[type="password"]');

    loginButton.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent form from submitting

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            console.log("Login failed: Please fill in both username and password.");
            alert("Both fields are required.");
            return;
        }

        console.log("Login successful with Username:", username);
        // Optional: redirect or authenticate here
    });
});
