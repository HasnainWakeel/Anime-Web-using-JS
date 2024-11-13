function change(e, check) {
    if (check === "over") {
        e.target.setAttribute("src", "./imgs/05.jpg");
        return;
    }

    e.target.setAttribute("src", "./imgs/02.jpg");
}


function blurInp(e, checkInp) {
    var nameError = document.getElementsByClassName('name-error')[0];
    var passError = document.getElementsByClassName('pass-error')[0];
    e.target.style.background = "transparent";

    if (checkInp === 'name') {
        if (e.target.value.length < 3) {
            nameError.innerText = 'Name should be at least 3 characters';
            nameError.style.display = 'block';
            return;
        }
        nameError.style.display = 'none';
    }

    if (checkInp === 'pass') {
        if (e.target.value.length < 9) {
            passError.innerText = 'Password should be at least 9 characters';
            passError.style.display = 'block';
            return;
        }
        passError.style.display = 'none';
    }
}

function passVisiblility(e) {
    var Visiblility = document.getElementById('visible');

    if (Visiblility.getAttribute('src') === "./imgs/visiblity on.png") {
        e.target.previousElementSibling.setAttribute('type', 'text');
        Visiblility.setAttribute("src", "./imgs/visiblity off.png");
    } else {
        e.target.previousElementSibling.setAttribute('type', 'password');
        Visiblility.setAttribute("src", "./imgs/visiblity on.png");
    }
}

