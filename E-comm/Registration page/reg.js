// reg.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".reg-form");
    const registerBtn = document.querySelector(".reg-btn");
    const resetBtn = document.querySelector(".reset-btn");

    registerBtn.addEventListener("click", function (e) {
        e.preventDefault(); // prevent default submission

        const inputs = form.querySelectorAll("input, select");
        const fullName = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const password = inputs[2].value.trim();
        const address = inputs[3].value.trim();
        const phone = inputs[4].value.trim();
        const dob = inputs[5].value;
        const gender = form.querySelector('input[name="gender"]:checked');
        const state = document.getElementById("state").value;

        // Basic validation
        if (!fullName || !email || !password || !address || !phone || !dob || !gender || !state) {
            alert("Please fill in all the required fields.");
            console.log("Form submission failed: Incomplete input.");
            return;
        }

        console.log("Form submitted successfully!");
        console.log({
            fullName,
            email,
            password,
            address,
            phone,
            dob,
            gender: gender.value,
            state,
        });

        // Optionally you can reset or redirect after validation
        // form.reset();
    });

    resetBtn.addEventListener("click", function () {
        console.log("Form reset.");
    });
});
