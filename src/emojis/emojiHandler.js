/* Makes key words into emojis */
let emojiWidth = 25;
let emojiHeight = 25;


function setupText() {
    let text = document.getElementById("textI").value; 
    let response = text
    .replaceAll(":blank:", "<img src='src/emojis/blank.svg' alt='blank' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":smiley:", "<img src='src/emojis/smiley.svg' alt='smiley' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":happy:", "<img src='src/emojis/happy.svg' alt='happy' wwidth='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":sad:", "<img src='src/emojis/sad.svg' alt='sad' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":angry:", "<img src='src/emojis/angry.svg' alt='angry' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":nerd:", "<img src='src/emojis/nerd.svg' alt='nerd' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":lol:", "<img src='src/emojis/lol.svg' alt='lol' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":textHappy:", "<img src='src/emojis/textHappy.svg' alt='text happy' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":sussedOut:", "<img src='src/emojis/sussedOut.svg' alt='sussed out' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":goofy:", "<img src='src/emojis/goofy.svg' alt='goofy' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":mad:", "<img src='src/emojis/mad.svg' alt='mad' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":joyful:", "<img src='src/emojis/joyful.svg' alt='joyful' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":moneyEyes:", "<img src='src/emojis/moneyEyes.svg' alt='money eyes' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":evil:", "<img src='src/emojis/evil.svg' alt='evil' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":panic:", "<img src='src/emojis/panic.svg' alt='panic' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":dizzy:", "<img src='src/emojis/dizzy.svg' alt='dizzy' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":jealous:", "<img src='src/emojis/jealous.svg' alt='jealous' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":smallsmile:", "<img src='src/emojis/smallsmile.svg' alt='small smile' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")

    document.getElementById("textbox").innerHTML = censor(response);
}
