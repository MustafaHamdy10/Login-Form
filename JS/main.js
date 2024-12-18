
// Initialization of Variables .

const passwordInput = document.getElementById('passwordInput');
const eyeIcon = document.getElementById('pass');

// Make a function to make password visible when we click on eye-icon

function togglePasswordVisibility() {

    // Toggle the input type
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash'); // Change icon to eye-slash
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye'); // Change icon back to eye
    }
}