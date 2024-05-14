redirect()
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
        const formData = new FormData(form);
        new Auth().createUser(formData.get('user'), formData.get('email'), formData.get('password'), formData.get('dob'), formData.get('gender'))
    });
});
