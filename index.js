//Some basic scripts created in javascript to work the website, and make it interactive.
console.log("Exit Now! This part is used for devolopers.");

function whatsNew() {
    var News;
    News = '<h2>Whats New?</h2><p>The bark editor is being created in.</p>';
    document.getElementById("boxChanger").innerHTML = News;
}

function recentCom() {
    var Commits;
    Commits = '<h2>Recent Commits</h2><p id="latest">Error! try looking at commits on the <br/> ';
    Commits += '<a href="https://github.com/Mariocraft987/bark.github.io/commits/main/" class="link">github commits page</a>';
    document.getElementById("boxChanger").innerHTML = Commits;
}

function randomTxt() {
    //geeksforgeeks.org for the random text generator.
    var wrd;
    let arr = ["Bark! woof!", "Bark is a mod of scratch with new extensions", 
    "Scratch dog", "Bark is being created, so stay patient!!", "Note: Bark does not support accounts yet", 
    "Funfact: Dogs have insane hearing and smelling.", "We need a scratch dog!", "Why not help with bark??", "A special version is here somewere..", 
    "Bark is hosted with github pages.", "Funfact: im a funfact!", "Bark is made from penguin mod made from turbowarp etc.", "Whats cooler, Dogs or Cats?", 
    "Wanna help create bark? go <a href='Jobs.html' class='link'>Here</a>", "Bark's birthday month is October", 
    "Why not go <a href='https://www.scratchfoundation.org/donate' class='link'>donate</a> to scratch?", "Go check out snail-ide!", ":amongus:", 
    "This text has a 0.07 chance of apearing", "So <em>many</em> breeds of dogs", "Check out our <a href='https://github.com/mariocraft987/bark.github.io/' class='link'>github</a>", 
    "Funfact: You are waiting for something to load", "Funfact: You are waiting for something to load", "Emojis are added! :party:"];

    wrd = (arr[(Math.floor(Math.random() * arr.length))]);
    document.getElementById("randomWord").innerHTML = wrd;
}

function Signup() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;

if (username != '', password != '', email != '') {
            document.getElementById('page').innerHTML = '<br/><h2>Welcome to Bark ' + username + '!</h2>';
            }
}

function jobRegister() {
    let job = document.querySelector('input[name=job]:checked').value;
    let username = document.getElementById('github-username').value;
    document.getElementById('page').innerHTML = '<br/><h2>You have selected a Job to ' + job + '</h2><p>We have to run a few tests to see your actually <em>'+ username +'</em></p>';
    }
