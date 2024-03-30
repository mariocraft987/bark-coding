/* Some basic scripts created in javascript to work the website, and make it interactive. */

let newsBox = "Try our new alpha <a href='https://github.com/mariocraft987/bark.github.io/releases/tag/0.1.0'>desktop app</a> it is missing a lot of functionality, but you can still do stuff, created by <a href='https://github.com/nmsderp'>nmsderp</a>, Updated by <a href='https://github.com/rubiidev18alt'>Rubiidev alt</a>"
let baseUrl = "https://bark-coding.vercel.app"
let commitsLength = 150

let mobile = window.navigator.userAgent.toLowerCase().includes("mobi");

console.log("Exit Now! This part is used for devolopers.");

// navbar
content = '<div class="navbar"><a href="'+baseUrl+'"><img src="src/images/Logo.svg" alt="bark" width="25" height="25" ></a><a href="editor_new">create</a><a href="explore.html">explore</a>'
content += '<a href="ideas.html">ideas</a><a href="about.html">about</a><a href="https://barkprogram.boards.net/">discuss</a>'
console.log(localStorage.getItem("myBarkUsername") != "")
content += '<a class="dark-mode-button" id="darkModeToggle"><dmbico alt="Dark Mode"></dmbico></a><form action="search.html" style="display: contents;"><input class="searchBar" id="search" name="q" placeholder="Search for Projects"></input></form>'
if (localStorage.getItem("myBarkUsername") == "") {
    content += '<a class="right">sign out</a><a class="right">profile</a>'
} else {
    content += '<a href="login.html" class="right">sign in</a><a href="signup.html" class="right">join bark</a></div>'
}
document.getElementById('navbar').innerHTML = content;

// footer
if (document.url != "baseUrl") {
document.body.innerHTML += '<footer style="background-color: rgb(0, 127, 255, 0.24); margin-top: 200px; height: 25vh; padding: 40px; text-align: center;"><p style="color: #777;">Looks like you\'ve reached the bottom.</p><p><a href="index.html">Home</a> <a href="editor_new/">Editor</a> <a href="https://github.com/mariocraft987/bark.github.io/">Source</a><br/><br/> <a href="credits.html">Credits</a> <a href="https://scratch.mit.edu/users/mariocraft987#comments">Contact</a> <a href="https://barkprogram.boards.net/">Forums</a><br/><br/> <a href="https://github.com/mariocraft987/bark.github.io/releases/download/0.0.1/barkdesktop.zip">Download</a> <a href="https://bark-org.vercel.app">Org</a></p></footer>';
}
    
function whatsNew() {
    document.getElementById("boxChanger").innerHTML = "<h2>Whats New?</h2><p>"+newsBox+"</p>";
}

function recentCom() {
    document.getElementById("boxChanger").innerHTML = "<h2>Fetching commits...</h2><p>please wait...</p>"; // get it? "fetching" commits??? eh????........anyone?
    fetch('https://api.github.com/repos/Mariocraft987/bark.github.io/commits?per_page=50')
        .then(response => response.json())
        .then(commits => {
            var Commits = '<h2>Recent Commits</h2><ul style="overflow-y: scroll; height: 150px;"><br/>';
            commits.slice(0, commitsLength).forEach(commit => {
                Commits += `<div title="${replace(commit.author.login)}: ${replace(commit.commit.message)}"><li><a href="https://github.com/${replace(commit.author.login)}"><img style="border-radius:12px;margin-top:-4px;margin-left:-6px" src="https://github.com/${commit.author.login}.png" width="21"></a><a href="${commit.html_url}">${replace(commit.commit.message)}</a></li></div>`;
            });
            Commits += '</ul><br><a class="buttonFrBx" href="https://github.com/Mariocraft987/bark.github.io/commits/main/" style="text-align: center;">See all</a><br>';
            finalCommits = Commits.replaceAll(":trollface:", "<img src='src/emojis/svg/troll.svg' width='23'>")
            document.getElementById("boxChanger").innerHTML = finalCommits + "<br/>"
        })
        .catch(error => {
            console.error('Error fetching commits:', error);
            document.getElementById("boxChanger").innerHTML = '<h2>Oops... :(</h2><p>Failed to load commits. Check your connection and try again.</p>';
        });
}

function randomTxt() {
    //geeksforgeeks.org for the random text generator.
    var wrd;
    let arr = ["Bark! woof!", "Bark is a mod of scratch with new extensions",
    "Scratch dog", "Bark is being created, so stay patient!!", "Note: Bark does not support accounts yet",
    "Funfact: Dogs have insane hearing and smelling.", "Why not help with bark??", "A special version is here somewere..",
    "Bark is hosted with Vercel.", "Funfact: im a funfact!", "Whats cooler, Dogs or Cats?",
    "Wanna help create bark? go <a href='Jobs.html' class='link'>Here</a>", "Bark's birthday month is October",
    "Why not go <a href='https://www.scratchfoundation.org/donate' class='link'>donate</a> to scratch?", "Go check out snail-ide!",
    "This text has a 0.07 chance of apearing", "So <em>many</em> breeds of dogs", "Check out our <a href='https://github.com/mariocraft987/bark.github.io/' class='link'>github</a>",
    "Funfact: You are waiting for something to load", "Emojis are added! :party:", "Bark is created with html and javascript",
    "Go check out Goldot", "Svelte is html but enchanted", ":dog::cat::banana:", "Come see our <a href='https://github.com/Bark-programming' class='link' >orginization</a>", "e",
    "See barks todo list <a href='https://bark-coding.vercel.app/static/todolist.txt' class='link'>here</a>", "The bark editor is made with Blockly", ":troll:", "the best emoji is :mewing:",
    ":woof:", "I'm a random text!", "Take care of us, we'll do it back, plant us and we'll produce", "3.1415926535"];

    wrd = (arr[(Math.floor(Math.random() * arr.length))]);
    document.getElementById("randomWord").innerHTML = wrd;
}

function Signup() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let hasAccount = (localStorage.getItem("myBarkUsername") != "");

            if (username != '', password != '', email != '') {
                if (hasAccount == true) {
                    document.getElementById('page').innerHTML = '<br/><h2>You already have a bark account.</h2>';
                }else{
                    document.getElementById('page').innerHTML = '<br/><h2>Welcome to Bark ' + username + '!</h2>';
                    localStorage.setItem("myBarkUsername", username)
                }
            }
    }

function jobRegister() {
    let job = document.querySelector('input[name=job]:checked').value;
    let username = document.getElementById('github-username').value;
    document.getElementById('page').innerHTML = '<br/><h2>You have selected a Job to ' + job + '</h2><p>We have to run a few tests to see your actually <em>'+ username +'</em></p><br/><br/><p>Please comment "Job Register 4067"';
    document.getElementById('page').innerHTML += ' on <a class="link" href="https://github.com/Mariocraft987/bark.github.io/commit/5644df6ebc5aa7ea7b611141a265ff7c17712c5e">this commit</a>.</p>'
    }

    /* @mnsderp for the data saving scripts */

  // Function to toggle dark mode
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    // Save dark mode state to local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
  }

  // Function to initialize dark mode based on local storage
  function initializeDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }

  // Attach event listener to dark mode toggle button
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('click', toggleDarkMode);

  // Initialize dark mode when the page loads
  window.addEventListener('load', initializeDarkMode);

whatsNew();

if (document.URL.includes("https://mariocraft987.github.io/bark.github.io/")) {
    location.href = baseUrl;
}

