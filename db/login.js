redirect()
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log(username, password)
        const auth = new Auth();
        try {
            const log = auth.login(username, password);
            if(log == true){
                window.location.reload();
            }
        } catch (error) {
            console.log(error)
            document.getElementById('error').style.display = 'block';
        }
    });
});
