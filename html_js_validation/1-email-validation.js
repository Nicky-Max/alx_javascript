const form = document.getElementById("emailForm");

function validateEmail() {
    const email = document.getElementById("email").value;
    const paragraph = document.querySelector("#error");
    var vldRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(vldRegex)) {
        paragraph.innerHTML = 'Please enter a valid email address.';
        return false;
    }
    paragraph.innerHTML = '';
    return true;
};

form.addEventListener("submit", function (fun) {
    if (!validateEmail()) {
        fun.preventDefault();
    }
    else {
        validateEmail();
        alert("Email is valid");
    }
});
