async function isuseradmin(username) {
    const admins = await fetch('https://api.bark.dumorando.com/api/v2/admins').then(data => data.json());
    return admins.includes(username);
}

async function amiadmin() {
    return await isuseradmin(localStorage.getItem("myBarkUsername"));
}