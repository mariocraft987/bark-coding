/* Makes key words into emojis */
let emojiWidth = 25;
let emojiHeight = 25;


function setupText() {
    let text = document.getElementById("textI").value; 
    let response = text
    .replaceAll(":blank:", "<img src='src/emojis/svg/blank.svg' alt='blank' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":smiley:", "<img src='src/emojis/svg/smiley.svg' alt='smiley' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":happy:", "<img src='src/emojis/svg/happy.svg' alt='happy' wwidth='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":sad:", "<img src='src/emojis/svg/sad.svg' alt='sad' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":angry:", "<img src='src/emojis/svg/angry.svg' alt='angry' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":nerd:", "<img src='src/emojis/svg/nerd.svg' alt='nerd' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":lol:", "<img src='src/emojis/svg/lol.svg' alt='lol' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":textHappy:", "<img src='src/emojis/svg/textHappy.svg' alt='text happy' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":sussedOut:", "<img src='src/emojis/svg/sussedOut.svg' alt='sussed out' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":goofy:", "<img src='src/emojis/svg/goofy.svg' alt='goofy' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":mad:", "<img src='src/emojis/svg/mad.svg' alt='mad' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":joyful:", "<img src='src/emojis/svg/joyful.svg' alt='joyful' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":moneyEyes:", "<img src='src/emojis/svg/moneyEyes.svg' alt='money eyes' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":evil:", "<img src='src/emojis/svg/evil.svg' alt='evil' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":panic:", "<img src='src/emojis/svg/panic.svg' alt='panic' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":dizzy:", "<img src='src/emojis/svg/dizzy.svg' alt='dizzy' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":jealous:", "<img src='src/emojis/svg/jealous.svg' alt='jealous' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":smallsmile:", "<img src='src/emojis/svg/smallsmile.svg' alt='small smile' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":troll:", "<img src='src/emojis/svg/troll.svg' alt='small smile' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":woof:", "<img src='src/emojis/svg/bark.svg' alt='small smile' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")

    document.getElementById("textbox").innerHTML = censor(response);
}
