async function isuseradmin(username) {
    const admins = await fetch('https://bark-backend-api-prod.replit.app/api/v1/admins').then(data => data.json());
    return admins.includes(username);
}

async function amiadmin() {
    return await isuseradmin(localStorage.getItem("myBarkUsername"));
}