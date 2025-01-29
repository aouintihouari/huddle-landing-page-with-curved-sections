document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const emailInput = document.querySelector(".email");
    const errorMessage = document.querySelector(".error-message");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            errorMessage.style.display = "block";
            emailInput.style.border = "2px solid red";
        } else {
            errorMessage.style.display = "none";
            emailInput.style.border = "2px solid green";
        }
    });
});