if (localStorage.devmode == "true") {
    document.getElementById('devmodeon').innerHTML = "Dev Mode on!";
} else {
    document.getElementById('devmodeon').innerHTML = "Dev Mode Off!";
}

document.getElementById("devmode").addEventListener("click", devmodeset);

function devmodeset() {
    if (localStorage.devmode == "false") {
        localStorage.devmode = "true";
    } else {
        localStorage.devmode = "false";
    }
}

function checkDarkModeSelect() {
    let darkModeValue = document.getElementById("dark-mode-setting-edit").value
    
        if (darkModeValue == "darkmodeon") {
            localStorage.darkMode = true;
        }
        if (darkModeValue == "darkmodeoff") {
            localStorage.darkMode = false;
        }
        window.location.reload()
    }

function switchTheme(selected) {
    localStorage.theme = selected;
    window.location.reload()
}
    
document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    if (theme) {
        if (!theme.startsWith('#')) {
            const btn = document.querySelector('[name="' + theme + '"]');
            if (btn) {
                btn.classList.add('active');
            }
        }
    }else{
        const btn = document.querySelector('[name="bluedodger"]');
        if (btn) {
            btn.classList.add('active');
        };
    };
    const form = document.getElementById('navColor');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const val = document.getElementById('navbar_color').value;
            if (val) {
                localStorage.setItem('navcolor', val);
                localStorage.setItem('theme', 'bluedodger');
                window.location.reload();
            }
        })
    }
})
let pendingTheme = localStorage.getItem('theme');
const btns = Array.from(document.getElementsByClassName('themeBtn'));
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        pendingTheme = e.target.name;
        const selectedBtn = document.getElementsByClassName('active')[0];
        if(selectedBtn){
            selectedBtn.classList.remove('active')
        };
        const newBtn = document.querySelector('[name="' + pendingTheme + '"]');
        if (newBtn) {
            newBtn.classList.add('active');
        }
    });
});

function setTheme() {
    localStorage.setItem('theme', pendingTheme);
    window.location.reload();
}

let applybtn = document.getElementById('applybtn');
applybtn.addEventListener('click', setTheme);