
function createEmojis() {
    let emojiWidth = 25;
    let emojiHeight = 25;
    let text = document.getElementById("emojiText").value; 
    document.getElementById("emojiTextbox").innerHTML = text
    .replace(":blank:", "<img src='src/emojis/blank.svg' alt='blank' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replace(":smiley:", "<img src='src/emojis/smily.svg' alt='smiley' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replace(":happy:", "<img src='src/emojis/happy.svg' alt='happy' wwidth='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replace(":sad:", "<img src='src/emojis/sad.svg' alt='sad' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replace(":angry:", "<img src='src/emojis/angry.svg' alt='angry' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replace(":nerd:", "<img src='src/emojis/nerd.svg' alt='nerd' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replace(":lol:", "<img src='src/emojis/lol.svg' alt='lol' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replace(":textHappy:", "<img src='src/emojis/textHappy.svg' alt='textHappy' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replace(":sussedOut:", "<img src='src/emojis/sussed_out.svg' alt='sussedOut' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replace(":goofy:", "<img src='src/emojis/goofy.svg' alt='goofy' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replace(":mad:", "<img src='src/emojis/mad.svg' alt='mad' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replace(":joyful:", "<img src='src/emojis/joyful.svg' alt='joyful' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replace(":moneyEyes:", "<img src='src/emojis/money_eyes.svg' alt='moneyEyes' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replace(":evil:", "<img src='src/emojis/evil.svg' alt='evil' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replace(":panic:", "<img src='src/emojis/panic.svg' alt='panic' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
}