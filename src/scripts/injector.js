let profile = localStorage.getItem("myBarkUsername") == "" ? '<a class="right">sign out</a><a class="right">profile</a>' : '<a href="login" class="right">Login</a><a href="signup" class="right">Join bark</a></div>'
let afdbtn = new Date().getMonth() === 3 && new Date().getDate() === 1 ? "<a id='flip-it-afd-btn'>FLIP IT</a>" : '';
const components = {
    //navbar
    "navbar": `
    <div class="navbar"><a href="/"><img src="/src/images/Logo.svg" alt="bark" width="25" height="25" ><img src="/src/emojis/svg/normal/pride.svg" alt="pride flag" width="25" height="25" ></a>
    <a href="${window.location.origin}/editor">Create</a>
    <a href="/explore">Explore</a>
    <a href="/ideas">Ideas</a>
    <a href="/about">About</a>
    `+ /*<a href="https://github.com/mariocraft987/bark.github.io/discussions">Discuss</a>*/ `
    <a href="/settings">Settings</a>
    ${afdbtn}
    <a class="dark-mode-button" onclick="toggleDarkMode()" id="darkModeToggle"><dmbico alt="Dark Mode"></dmbico></a><form action="search" style="display: contents;"><input class="searchBar" id="search" name="q" placeholder="Search for Projects"></input></form>
    ${profile}
    `,
    //footer
    "footer": `
    <footer><p style="color: #777;">Looks like you\'ve reached the bottom.</p><p>
    <a href="/">Home</a>
    <a href="/editor/">Editor</a>
    <a href="https://github.com/mariocraft987/bark.github.io/">Github</a>
    <br/><br/><a href="https://github.com/mariocraft987/bark-coding/wiki">Wiki</a>
    <a href="https://discord.gg/hXmHw7H9BF">Discord</a>
    </p></footer>
    `
};
Object.keys(components).forEach(item => {
    document.body.innerHTML = document.body.innerHTML.replace(`<!-- inject:${item} -->`, components[item]);
});
//done injecting, go to the top cuz it scrolls down automatically for some reason
window.scrollTo(0, 0);
