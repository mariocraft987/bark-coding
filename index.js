function whatsNew() {
document.getElementById("boxChanger").innerHTML = '<h2>Whats New?</h2><p>The bark explore page is being created.</p>';
}

function recentCom() {
    document.getElementById("boxChanger").innerHTML = '<h2>Recent Commits</h2><p>Recent commits are soon to be added</p>';
}

function randomTxt() {
//geeksforgeeks.org for the random text generator.
var wrd;
let arr = ["Bark! woof!", "Bark is a mod of scratch with extensions",
    "Scratch dog 🐶", "Bark is being created, so stay patient!!", "note: Bark does not support accounts yet", 
"funfact: Dogs have insane hearing and smelling.", "We need a scratch dog!"];

wrd = (arr[(Math.floor(Math.random() * arr.length))]);
document.getElementById("randomWord").innerHTML = wrd;
}