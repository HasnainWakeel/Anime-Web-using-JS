var nameError = document.getElementsByClassName('name-error')[0];
var passError = document.getElementsByClassName('pass-error')[0];

function blurInp(e, checkInp) {
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
}

function passVisiblility(e) {
    var Visiblility = document.getElementById('visible');

    if (Visiblility.getAttribute('src') === "../../imgs/visiblity on.png") {
        e.target.previousElementSibling.setAttribute('type', 'text');
        Visiblility.setAttribute("src", "../../imgs/visiblity off.png");
    } else {
        e.target.previousElementSibling.setAttribute('type', 'password');
        Visiblility.setAttribute("src", "../../imgs/visiblity on.png");
    }
}

var signUp = () => window.location.href = ('../../index.html');




function getData() {
    var users = localStorage.getItem('users');
    if (users) {
        return JSON.parse(users);  // Parse the JSON string and return the resulting object/array
    }
    return null;  // In case 'users' is not found
}

var userData = getData();

var checkUser = (e) => {
    var nameInp = document.getElementById('name').value;
    var passInp = document.getElementById('pass').value;
    e.preventDefault();

    nameError.style.display = 'none';
    passError.style.display = 'none';

    // Check if userData is null
    if (!userData) {
        alert("No users found in localStorage");
        return;
    }

    let userFound = false;
    let nameFound = false;
    let passFound = false;


    for (let i = 0; i < userData.length; i++) {
        if (nameInp === userData[i].username) {
            nameFound = true;

            if (passInp === userData[i].password) {
                passFound = true;
                localStorage.setItem('loggedInUsers', JSON.stringify(userData[i]));
                window.location.replace('../dashboard/dashboard.html');
                userFound = true;
                break;
            }
        }
    }

    if (!nameFound) {
        nameError.innerText = 'Incorrect Name';
        nameError.style.display = 'block';
    }

    if (!passFound && nameFound) {
        passError.innerText = 'Incorrect Password';
        passError.style.display = 'block';
    }

    if (!userFound) {
        alert("You don't have an account. Please create one.");
    }
};
