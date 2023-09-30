function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name.trim() === "" || email.trim() === "") {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Please fill in all required fields.";
        errorMessage.style.color = "red";

        const existingError = document.getElementById("error");
        if (existingError) {
            existingError.remove();
        }

        const form = document.getElementById("submitForm");
        form.appendChild(errorMessage);

        return;
    }

    const successMessage = document.createElement("p");
    successMessage.textContent = "Form submitted successfully!";
    successMessage.style.color = "green";

    const existingError = document.getElementById("error");
    if (existingError) {
        existingError.remove();
    }

    const form = document.getElementById("submitForm");
    form.appendChild(successMessage);

}

document.getElementById("submitForm").addEventListener("submit", handleFormSubmit);
