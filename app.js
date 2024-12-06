// Helper functions for getting and setting data in localStorage
function getData() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function setData(data) {
    localStorage.setItem('users', JSON.stringify(data));
}

// Validate form inputs
function validateInp(e, checkInp) {
    var nameError = document.getElementsByClassName('name-error')[0];
    var passError = document.getElementsByClassName('pass-error')[0];
    var emailError = document.getElementsByClassName('email-error')[0];

    e.target.style.background = "transparent";

    if (checkInp === 'name') {
        if (e.target.value.length < 3) {
            nameError.innerText = 'Name should be at least 3 characters';
            nameError.style.display = 'block';
            if (e.target.value.length === 0) {
                nameError.style.display = 'none';
            }
            return;
        }
        nameError.style.display = 'none';
    }

    if (checkInp === 'pass') {
        if (e.target.value.length < 9) {
            passError.innerText = 'Password should be at least 9 characters';
            passError.style.display = 'block';
            if (e.target.value.length === 0) {
                passError.style.display = 'none';
            }
            return;
        }
        passError.style.display = 'none';
    }

    var regex = /^[a-zA-Z0-9\._\+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9]{2,4}$/;

    if (checkInp === 'email') {
        if (!e.target.value.match(regex)) {
            emailError.innerText = 'Incorrect Email';
            emailError.style.display = 'block';
            if (e.target.value.length === 0) {
                emailError.style.display = 'none';
            }
            return;
        }
        emailError.style.display = 'none';
    }
}

// Password visibility toggle
function passVisiblility(e) {
    var visibility = document.getElementById('visible');
    if (visibility.getAttribute('src') === "./imgs/visiblity on.png") {
        e.target.previousElementSibling.setAttribute('type', 'text');
        visibility.setAttribute("src", "./imgs/visiblity off.png");
    } else {
        e.target.previousElementSibling.setAttribute('type', 'password');
        visibility.setAttribute("src", "./imgs/visiblity on.png");
    }
}

// Form submission (sign-up)
function submitForm(e) {
    e.preventDefault();

    var emailInp = document.getElementById('email').value;
    var usernameInp = document.getElementById('username').value;
    var passwordInp = document.getElementById('password').value;

    // Get existing users data from localStorage
    var users = getData();
    
    // Add new user data
    users.push({
        username: usernameInp,
        password: passwordInp,
        email: emailInp,
    });

    // Save updated data back to localStorage
    setData(users);

    // Optional: Log the users to the console (for debugging)
    console.log(users);
    
    alert('Your account has been created');
    
    // setTimeout(function() {
        window.location.href = './pages/sign-in/signIn.html';
    // }, 3000);
}


var signIn = () => window.location.href = ('./pages/sign-in/signIn.html');