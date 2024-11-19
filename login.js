const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const successMessage = document.getElementById('success-message');

const setInputStatus = (input,message,isVlaid) => {
    const parent = input.parentElement;
    parent.className = `input-controls ${isVlaid ? 'success' : 'error'}`;
    parent.querySelector('.error').innerText = message;
}

const validateInput = (input, checks) => {
    for(const [check, message] of checks) {
        if(!check) {
            setInputStatus(input,message,false);
            return false;
        }
    }
    setInputStatus(input,'',true);
    return true;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    successMessage.classList.remove('show');

    const emailFeild = validateInput(email, [[email.value.trim() !== '', 'Email Is Required!'],[/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)]]);
    const passwordFeild = validateInput(password, [[password.value.trim() !== '', "Password is Required"],[password.value.length >8, "Password Should Be Atleast 8 Character Long "]]);

    if (emailFeild && passwordFeild) {
        successMessage.classList.add('show');
        form.reset();
        document.querySelectorAll('.input-controls').forEach(control => {control.className = 'input-controls'})
    };
});