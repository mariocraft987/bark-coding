content = '<div class="navbar"><a href="' + baseUrl + '"><img src="' + window.location.origin +'/src/images/Logo.svg" alt="bark" width="25" height="25" ></a>'
content += '<a href="'+ window.location.origin +'/editor">Create</a>'
content += '<a href="/explore">Explore</a>'
content += '<a href="/ideas">Ideas</a>' 
content += '<a href="/about">About</a>'
content += '<a href="https://github.com/mariocraft987/bark.github.io/discussions">Discuss</a>'
content += '<a href="/settings">Settings</a>'
// special april fools button ;)
if (new Date().getMonth() === 3 && new Date().getDate() === 1) {
    content += "<a id='flip-it-afd-btn'>FLIP IT</a>";
}
content += '<a class="dark-mode-button" onclick="toggleDarkMode()" id="darkModeToggle"><dmbico alt="Dark Mode"></dmbico></a><form action="search" style="display: contents;"><input class="searchBar" id="search" name="q" placeholder="Search for Projects"></input></form>'
if (localStorage.getItem("myBarkUsername") == "") { // has profile?
    content += '<a class="right">sign out</a><a class="right">profile</a>' // profile button
} else {
    content += '<a href="login" class="right">Sign in</a><a href="signup" class="right">Join bark</a></div>' // signup and login button
}
try {
    document.getElementById('navbar').innerHTML = content;
} catch {
    console.log('seems like this page uses inject syntax for the navbar, continuing..')
}
