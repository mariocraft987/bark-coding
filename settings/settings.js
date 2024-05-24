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
                localStorage.setItem('theme', val);
                window.location.reload();
            }
        })
    }
})
var pendingTheme = localStorage.getItem('theme');
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
const applybtn = document.getElementById('applybtn');
applybtn.addEventListener('click', () => {
    localStorage.setItem('theme', pendingTheme);
    window.location.reload();
});












// too lazy to change variable names, but this is for stage position

var pendingTheme = localStorage.getItem('stage-pos');
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
const applybtn = document.getElementById('applybtn');
applybtn.addEventListener('click', () => {
    localStorage.setItem('stage-pos', pendingTheme);
});
