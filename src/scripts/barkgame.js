num = 0;
document.getElementById("bigbrainman").addEventListener("click", ctbd_addPlus);

// ctbd for Catch that bark dog
// https://github.com/mariocraft987/bark-coding/discussions/264
function ctbd_addPlus() {
    num++;
    // for debugging
    console.log(num);
    if (num == 7) {
        alert("( ͡° ͜ʖ ͡°)")
    }
}