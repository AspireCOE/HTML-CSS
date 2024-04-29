const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const signUpBtn = document.querySelector(".signup-btn");

const requirements = [
    { name: "Minimum 8 characters", regex: /.{8,}/ },
    { name: "At least one digit", regex: /\d/ },
    { name: "At least one lowercase letter", regex: /[a-z]/ },
    { name: "At least one special character", regex: /[^A-Za-z0-9]/ },
    { name: "At least one uppercase letter", regex: /[A-Z]/ }
];

eyeIcon.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;

    const isPasswordValid = requirements.every(requirement => requirement.regex.test(password));

    signUpBtn.disabled = !isPasswordValid;
});
