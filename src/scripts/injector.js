const response = await fetch(`https://api.bark.dumorando.com/api/v2/fetchUser?username=${localStorage.getItem("myBarkUsername")}`);

if (response.status === 404) {
    pfp = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCAEsASwDASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAMEBQIBBgf/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB/VAAAAAEOealbGjTTr1BNHyPXgklrC/Zxx9FN8xZN5QvL6AAAAAAAAVCxl0o065AAAAAAABPANy58vfNlx2oAAAAAyjvK8IAAAAAAAAAABPt/Oyn0aGZQAABUIMn3xAAAAAAAAAAAAAJt35y2brnpQAOPnrmegAAAAAAAAAAAAAAGrpfNfQEwVDNkmfyIAAAAAd6Jn2NIUPNAuTBu8JiLdQAAAAAaGf0fTI5F5+d2cJAAAAAEsewddigAAKN4YK3UQAAAADW0sHeXKzLlNAAAAALmlBOoAAAAHGLu5KVwAAAAdfQ/ObyY8PXKgAAAAbnXnqgAAAAM/QoFAIAAAA2Me0VvPfAAAAADakp3FAAAAAZulipGAAAAB1zII7NYAAAAAm18K+XwoAAA4IMvvhAAAAAGlm7lUqGxjwAAAAABfvYUxsKdhZHnh0gqF3Lj8QAAAAAB9FhfRpD899PgrVAAAAAAAAAAAAAAAABf2aluVRveV8wngQAAAAkvGfY0/SjLZLXWBUh0Rjw70SYy3VPAAAALFfaLwUCnh/T46UAAD0XZ7J56KAAAAAhmGNFuZaVwADosb0E6gAOOx89B9FhJED3UhvgKAAAAAAA89GRBt46cAbEemehQAAEMw+d536iS+igAAAAAAAAKdzwwtSW8noUAAAAACKK14VkkYAAAAAAAdSEc3QAAAAAAAAAeeiLiwKqzyQJeDkB3IQezdkEnYAAAAAA/8QAJhAAAgEEAgEFAAMBAAAAAAAAAQIDAAQSMBFAIBATISIxFCNQMv/aAAgBAQABBQLa06CmuaNxJRkeuT65NQmkFC5aluVNK6t2HcJT3NMzNtSd1pJ1bqMQokuKPz0UkZKimV+jLMEp3LnqRTlaB5G2efjsRyFCjhxrnm7SMUMbh103EvHcjcoysGHnPJgvdgkwbyY4h2Lt3rWTkeN0/wA98Hgo2a+sjYIfk7VUtQgav49ewaMTDfaPw3rdt87FUsUhA8mUNUkRXaDwUOS+jtk2tFLlVCjRNFttG+tXDcRbI1wGqdMTrt2xlq8Oy3XltbjJdY+DzyLk8y64RxHsnHEmuD5il+ZNY/Nlz+67U/1t+9i52RngbEPKbLg/fYf3Xbn67HOTawKf/vXG2La524XZbjlJxxLsgk1OwUMcjstfiK7H32xS6HcJTsXO2McJdjlNyOVpZxQdT6cijKoppyd8YyepBkn+HaL9/S4XGT/Ct1xi9LlMk2Ac0IWNCCvZSvaSvZSjAtGA00bDbCmb+EyYPpVS1JCBQHGlo1anhI12yYp4XCZpojhr82vGHp0KaII838rmPg+P7UUWPQI5qSPHyA5MSYL5EciVMG8Io8R0T81KmB8LeLEaHQOroUPpbp1GXIMMT6W8OuRA6yIUKLk3VuF5FQQ7WUMEi9vrftRQhTvK9QDmgOmV6AFBevjXB141x3OBRXw4rEdH/8QAFBEBAAAAAAAAAAAAAAAAAAAAgP/aAAgBAwEBPwE0/wD/xAAUEQEAAAAAAAAAAAAAAAAAAACA/9oACAECAQE/ATT/AP/EACgQAAEDAQgBBQEBAAAAAAAAAAEAETAhAhASIDFAUWFBIjJQcZGBcP/aAAgBAQAGPwKXV/pemytWXuK1v9xXuVQCquFQ7j1FegL1F5dX+1Wh2jlNY/VXY004XB2PJT2tq1uoTiZrGvO464TiTDY/d04TiLDZ187xwnEHZ31dDncpzv8AAf5mwj4BwgchM9AvC9y1Wk+HnILMrBVqc1QnFRK4QN5MjBMIXsymzxce6bhxoZB3S6yJH4kIlBCPUglMllWvuQSiT+o7mzuR8M3EpMtr7keRvJl/qtS4TE5TmUIHqZrX7BVVmAQPE9FWi1F2q1XppOBcR8I/F57+DHd7+RLRcKpu0Wi8qhVRKB4ykeIqL1VVIahUrG/k5exC9v8AJu1WDoZ8Q0OdzrsGK6zME2diusrnXZVXWXEdYWKY34jtGKY34rX8jYpim22Li7Fb/JWKPnbuanYU/wAQ/8QAKRAAAQIFAwQBBQEAAAAAAAAAAQARITAxUWFAQXEQIIGRoVCxweHw8f/aAAgBAQABPyGYS1Vc5P2hRFA4BFV96Jql76OboCoHyqAXmKFQUL8ioGdQCgBFMGMlFIs1YCyNwPmoq6N0IARTsi5ESciTnQ17yUUE8J0MJ8Kcg+NL7QNwhCI4M6JNlYiXLmunh6O5Hi/qZXNzqnvqLr2JFpUcbJbWexAuhOkZFOxIly5rrYdlYQj3BLQCOd7XxBiO44FIRP0Aw6gQgu/YAjsiJCamM6rRRFSC/hkdofSvzhEMYznAqRDnsfB2iZrAXKjf4ncGrL/ESaQVQIIXcdCWDmicfczPeQppkmoLkTXyMh0zWYAOWFUFnffTqGI9D7rMeDmAkN0QxYyyYIqENoCHXEgEzmEZvIIzCfYZE7ymCwLCaMfExwxZCc1zMFJtflMfRlGY8cTXgFhMCqTHzm2VDMeCFgWKY37N0IhxLh2aOhTzJ5rEXgyxhy1Jocokpq8nGUhEQ7x11k6fAWnEtwWVU+roWKJpKUD3dCCoBXpwoQHJEklyXM7O56ZTH0R4rXXAoh9DzCI9YSuzSEwEnCrzckHd8BAVz5X9Sj/qWwILbZ5VTWxN8iD2GK8gBKPsPlRYnfCADAAMSb0XCi8L5lxj+nto14SXkAADAMJoqMLkSai8itXj3weuYPcASYRJQN59ugELDhGNxE9+4wgOSgDGu57xGA4KK1uoe29H40QACIgi5VO24P4kmC/UQ36/htIIqClqDq0wuEv05Nl6WG6afZAAAAUGlgqtXHRlgcTTbXCfG8VONM1DO64UGNCCGroy8EAU0RANUTbQEKAKx0xANUbURbSgCaBA90BGrZ08KIGU3ViCmAoNB//aAAwDAQACAAMAAAAQAAAAAAs++euukIAAAAAAAAANe+++++++uoAAAAAAAe+++++++++++qAAAAAe+++++++++++++IIAAc+++++++++++++++8AUe+++++6AAw2+++++6A8+++++qAAAAA2+++++C2+++++gAAAAAU+++++b++++++oAAAAAA+++++ue+++++oAAAAAA+++++u2+++++YAAAAAe+++++o+++++++YMMEO++++++rk+++++++++++++++++qQ++++++gggQQ6++++qAA4+++QgAAAAAA8+++gAAQS+AAAAAAAAAA6+0AAAAAcgAAAAAAAAAUsAAAAAAAwEAAAAAAAEgAAAAAAAAAAQsEMEYwAAAAAA//EABsRAAIDAAMAAAAAAAAAAAAAAAERIEBQEDBg/9oACAEDAQE/EJOTqvwy4XSb5xjmm0oLRWt//8QAGxEBAAIDAQEAAAAAAAAAAAAAAREwABAgQFD/2gAIAQIBAT8Q6jI4jIripPInkTg8DVOTk0nTY4dPR02njLUtO03GR24eJonJ1OT07HhaBoHS1Gl6mxflf//EACoQAQABAgQEBgMBAQAAAAAAAAERACEwMUFRYXGBoRAgQJGx0cHh8PFQ/9oACAEBAAE/EMQhKAM1YpVGBoJ75d6XIOf4j7rKS4X5r4OMKzN801K5rQWSOtP+0Mpy76PlVlK4CP8AdKIhXfJ99qF0/Ib+2fqJrK5Ga8ipII577f7U6S4tuhliCiIo1Bj1Z3zohRt0+77oQCMjqejWBerU2GlqPI0pex5qlfQsl3VcX9wqDbxrPk61b0ASY0S5c6npWmg5HpYhVbGf7Chh3wmuMKEcmhwHGkRFTKt2fTzNyNxs/ugs4yRzWziX+AF8H36oW3BMhs0ebgma2cKHclg7Dj6w9dMtAUpsh7c8ACGNo7caREVMq5+tSQVoG7ekARkbieZJ4OVpxM1jY0PX54ClOpt0p8s+u6uh0/4Dzw4jUMMC5s6nkhCssbuhTpqynecbJk3i3vlXz2y0LU/3nRi/eKKvcCaue2dIgETRxpB9o/Y+PJKyw62n9xxSCOwcWgSHjZOn3QAQEHliIbHU60Iyau+KYSGkdorJFJ5eAokAlabPDPI0MQSEGegFGIRqua7uCSQzmOvExZMXXQf38+FrMQDrn2nEYwVMAa0ZMLut3DIChstnbEuJiRdcu8eF4uL+D84hgrWHN/WJppLOzo0iBCMOGuYgTmVoAQ61GtOwT+cTJ97vXLtGLZxBb6595xGS07DFcsDoOJFuQHtigatR7f7iTBrHYfzXEwe+JcE2xXZ4fhif0jIq5XEvXMmeeuLE+n7r/mJkoQGzGJPWak5P84igKsBW09jlp2xGljWuBg74iXbQODSAQRJHhhjIaPI1xXhtXwVEt+4T+cUoW2t8YSlLGQZrsUtV3YxTV/sR+Khwt3h/zGhDsZH2pAKEcky88hUvI5tTjsZGWMFQSM86jAvf5NvmMdLrrhR8Oblz7ou+nSA+1COSNGyVxYo/K9r++VFIBuu0yUmasrjWasM8s3t4Barwc9O9IiiQlo/4ctlojm/qfGehe97PvP8AwwtI71l2jxtJPYa/fTF4eaE1BJLiv2oZdcgoi5zqH+790jJHJUr54SgX4AIq48QuMWZyR7J90G3iAIkjZKU0ZXdx+sKclNVYOtQiNotTgQoQYIDALgNEKx6ZeykRREcKeGL3LR5ZBPcdzABUAlpYSBmann9UZEGQEGKwRsHPrvUZbshk4CBHuOx/caCC3m1hFp/EPmMiogDWiiHs8noFolzGr7EW1HB8z3lQFRwObefOMIUI607ct7ePICoBLRgIl7NvRCUIQjrVoy5z8PHyxw27Dp+8EMLNx1HcpuPHQG54yWbZF+fSBlZ12aK6Ejn46gs1+XDRFxDNblRZkcnIUheSytjWiZAIDh6WPHhNf08J1wzb5frFSHX+tUIQKFFzY+mtNpYm9PlDc2Q06+gNvY7UigI+jvGW6gbL7+iNgTQruTakRhEcfJy27VwuemAgDROdOdb4OFIjDbBzQSmZg71p0vH1cMxWkDlag5I60njTr4DZzQNF5tacPQf/2Q==`;
} else {
    const data = await response.json();
    pfp = data.profilepicture;
    console.log(pfp);
}

const actionsecret = localStorage.getItem("secret");
let profile = !!localStorage.getItem("myBarkUsername") ? `<a href="/mail" class="right">Mail</a><a href="/profile/${localStorage.getItem("myBarkUsername")}" class="right"><img width="25" src="${pfp}">My Profile</a></div>` : '<a href="login" class="right">Login</a><a href="signup" class="right">Join bark</a></div>'
let setting = !!localStorage.getItem("myBarkUsername") ? `<a href="/settings">Settings</a>` : ''
let afdbtn = new Date().getMonth() === 3 && new Date().getDate() === 1 ? "<a id='flip-it-afd-btn'>FLIP IT</a>" : '';
let turkey = new Date().getMonth() === 10 && new Date().getDate() === 28 ? "<a onclick='alert(`Happy Thanksgiving!!\n\n🦃🦃🦃`)'>🦃</a>" : '';

const components = {
    //navbar
    "navbar": `
    <div id="navbar" class="navbar"><a href="/"><img id="bark_logo" src="/src/images/Logo_christmas.svg" alt="bark" width="25" height="25" ></a>
    <a href="/editor_comingsoon">Create</a>
    <a href="/explore">Explore</a>
    <a href="/about">About</a>
    ${setting}
    ${afdbtn}
    ${turkey}
    <a class="dark-mode-button" onclick="toggleDarkMode()" id="darkModeToggle"><dmbico alt="Dark Mode"></dmbico></a><form action="/search" style="display: contents;"><input class="searchBar" id="search" name="q" placeholder="Search for Projects"></input></form>
    ${profile}
    `,
    // editor_navbar
    "editor_navbar": `
    <div id="navbar" class="navbar"><a href="/"><img src="/src/images/Logo.svg" alt="Bark" width="25" height="25"></a>
    <input type="file" id="fileInput" accept=".barkf" style="display: none;" onchange="loadWorkspaceFromFile(this.files[0])" />
    <a href="#" onclick="openFileInput();" title="open a saved project">Open</a>
    <a href="#" id="downloadbutton" onclick="downloadproject();" title="download project to your computer.">Download</a>
    <a href="/advanced/">Advanced</a>
    <a class="dark-mode-button" id="darkModeToggle">
      <dmbico alt="Dark Mode"></dmbico>
    </a>
    <input class="searchBar" id="projectname" placeholder="Project name..." value="project"></input></div>
    `,
    //footer
    "footer": `
    <footer><p style="color: #777;">Looks like you\'ve reached the bottom.</p><p>
    <a href="/">Home</a>
    <a href="/advanced">Editor</a>
    <a href="https://github.com/mariocraft987/bark.github.io/">Github</a>
    <br/><br/><a href="https://bark.dumorando.com/docs">Docs</a>
    <a href="https://discord.gg/hXmHw7H9BF">Discord</a>
    <a href="https://x.com/barkcoding">Twitter</a></p>
    <p style="color: #777;">for bark dog: 🦴</p><br />
  <p style="font-size: 5pt; color: #777;">Even though this project is hosted on a dumorando.com domain, this project is barely affiliated with dumorando.</p></footer>
    `
};
Object.keys(components).forEach(item => {
    document.body.innerHTML = document.body.innerHTML.replace(`<!-- inject:${item} -->`, components[item]);
});
//done injecting, go to the top cuz it scrolls down automatically for some reason
window.scrollTo(0, 0);
