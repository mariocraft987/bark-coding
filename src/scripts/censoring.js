/* Basicly censors text */
let token = "★";

function setupText() {
    let text = document.getElementById("TextI").value; 
    document.getElementById("Textbox").innerHTML = text
    .replaceAll("", token + token + token + token)
    .replaceAll("", token + token + token + token)
    .replaceAll("", token + token + token + token + token)

}
