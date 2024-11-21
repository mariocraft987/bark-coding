
function setup_badges() {
    // badges, for customization
    if (username == "marioc") {
        document.getElementById('username').outerHTML += "<badge-box>Creeper? Aw man</badge-box>";
        document.getElementById('username').style.color = "#ffa70f";
    }

    if (username == "RarestUsername") {
        document.getElementById('username').outerHTML += "<badge-box>Bruh</badge-box>";
        document.getElementById('username').style.color = "#1cd94e";
    }
}