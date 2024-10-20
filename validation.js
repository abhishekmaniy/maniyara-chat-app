document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    // Check if the form exists on the page
    if (form) {
        // Common inputs for both forms
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");

        // Additional inputs for the register page
        const phoneInput = document.getElementById("phone");
        const genderInputs = document.querySelectorAll('input[name="gender"]');
        const profilePicInput = document.getElementById("profile-pic");

        form.addEventListener("submit", (e) => {
            let isValid = true;

            // Clear any previous error messages
            clearErrorMessages();

            // Validate Username: Minimum length 3 characters
            if (usernameInput.value.trim().length < 3) {
                showError(usernameInput, "Username must be at least 3 characters long.");
                isValid = false;
            }

            // Validate Password: Minimum length 6 characters
            if (passwordInput.value.trim().length < 6) {
                showError(passwordInput, "Password must be at least 6 characters long.");
                isValid = false;
            }

            // Validation for the Register page
            if (phoneInput) {
                // Validate Phone: Must be 10 digits
                const phoneRegex = /^\d{10}$/;
                if (!phoneRegex.test(phoneInput.value.trim())) {
                    showError(phoneInput, "Phone number must be exactly 10 digits.");
                    isValid = false;
                }

                // Validate Gender: Ensure one option is selected
                let genderSelected = false;
                genderInputs.forEach((input) => {
                    if (input.checked) {
                        genderSelected = true;
                    }
                });
                if (!genderSelected) {
                    showError(genderInputs[0], "Please select a gender.");
                    isValid = false;
                }

                // Validate Profile Picture: Ensure a file is selected
                if (profilePicInput.files.length === 0) {
                    showError(profilePicInput, "Please upload a profile picture.");
                    isValid = false;
                }
            }

            // Prevent form submission if validation fails
            if (!isValid) {
                e.preventDefault();
            }
        });
    }

    // Function to show error message
    function showError(input, message) {
        const errorElement = document.createElement("div");
        errorElement.className = "error-message text-danger mt-1";
        errorElement.innerText = message;
        input.parentElement.appendChild(errorElement);
        input.classList.add("is-invalid");
    }

    // Function to clear previous error messages
    function clearErrorMessages() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach((message) => message.remove());

        const invalidInputs = document.querySelectorAll(".is-invalid");
        invalidInputs.forEach((input) => input.classList.remove("is-invalid"));
    }
});
