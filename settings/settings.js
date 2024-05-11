document.addEventListener('DOMContentLoaded', () => {
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
    });
});
const applybtn = document.getElementById('applybtn');
applybtn.addEventListener('click', () => {
    localStorage.setItem('theme', pendingTheme);
    window.location.reload();
});