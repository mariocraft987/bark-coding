content = 'THIS IS OLD CODE FROM NAVBAR.JS, REFRESH THE PAGE TO CHANGE IT BACK, THIS WILL BE FIXED SOON'
try {
    document.getElementById('navbar').innerHTML = content;
} catch {
    console.log('seems like this page uses inject syntax for the navbar, continuing..')
}
