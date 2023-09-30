const form = document.forms['passwordForm'];

function validatePassword () {
    const password = document.getElementById("password").value;
    const paragraph = document.getElementById("error");

    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    if (password.length < minLength) {
        paragraph.textContent = "Password must be at least 8 characters";
        return false;
    }
    if (!hasLowerCase) {
        paragraph.textContent = "Password must contain a lowercase letter";
        return false;
    }
    if (!hasUpperCase) {
        paragraph.textContent = "Password must contain an uppercase letter";
        return false;
    }
    if (!hasDigit) {
        paragraph.textContent = "Password must contain a number";
        return false;
    }
    if (!hasSpecialChar) {
        paragraph.textContent = "Password must contain a special character";
        return false;
    }
    paragraph.innerHTML = "";
    return true;
};

form.addEventListener("submit", function (fun) {
    if (!validatePassword()) {
        fun.preventDefault();
    }
    else {
        validatePassword();
        alert("Password is valid");
    }
});