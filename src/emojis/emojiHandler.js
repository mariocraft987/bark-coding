
function createEmojisInBio() {
    let emojiWidth = 25;
    let emojiHeight = 25;
    let text = document.getElementById("emojiText").value; 
    document.getElementById("emojiTextbox").innerHTML = text.replace(":smiley:", "<img src='src/emojis/smily.svg' width='"+ emojiWidth + "' height='" + emojiHeight + "'>").replace(":happy:", "<img src='src/emojis/happy.svg' wwidth='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replace(":sad:", "<img src='src/emojis/sad.svg' width='"+ emojiWidth + "' height='" + emojiHeight + "'>").replace(":angry:", "<img src='src/emojis/angry.svg' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replace(":nerd:", "<img src='src/emojis/nerd.svg' width='"+ emojiWidth + "' height='" + emojiHeight + "'>").replace(":lol:", "<img src='src/emojis/lol.svg' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replace(":textHappy:", "<img src='src/emojis/textHappy.svg' width='"+ emojiWidth + "' height='" + emojiHeight + "'>").replace(":sussedOut:", "<img src='src/emojis/sussed_out.svg' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replace(":goofy:", "<img src='src/emojis/goofy.svg' width='"+ emojiWidth + "' height='" + emojiHeight + "'>").replace(":mad:", "<img src='src/emojis/mad.svg' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replace(":joyful:", "<img src='src/emojis/joyful.svg' width='"+ emojiWidth + "' height='" + emojiHeight + "'>").replace(":moneyEyes:", "<img src='src/emojis/money_eyes.svg' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
}