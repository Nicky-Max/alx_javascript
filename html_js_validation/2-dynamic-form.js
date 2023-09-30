const form = document.getElementById('dynamicForm');

form.addEventListener('submit', (fun) => {
    const selectedFields = document.getElementById('numFields');
    if (!generateInputFields(selectedFields.value)) {
        fun.preventDefault();
    }
    else {
        generateInputFields(selectedFields.value);
        validateForm();
    }
});

function generateInputFields(element) {
    const inputContainer = document.getElementById('inputContainer');
    for (let i = 0; i < element; i++) {
        const inputForm = document.createElement('form');
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', `field${i + 1}`);
        input.setAttribute('placeholder', `Field ${i + 1}`);
        inputForm.appendChild(input);
        inputContainer.appendChild(inputForm);
    }
}

function validateForm() {
    const form2 = document.forms['inputForm'];
    for (let i = 0; i < form.length; i++) {
        if (form2[i].value === '') {
            alert('Please fill in all fields');
            return false;
        }
    }
    alert('Form Submitted');
    return true;
}