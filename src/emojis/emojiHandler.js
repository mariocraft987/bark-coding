/* Makes key words into emojis */
let emojiWidth = 25;
let emojiHeight = 25;


function setupText() {
    let text = censor(document.getElementById("textI").value); 
    let response = text

    .replaceAll(":amazed:", "<img src='src/emojis/svg/amazed.svg' style='margin-bottom: -7px;' alt='amazed face' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":alien:", "<img src='src/emojis/svg/alien.svg' style='margin-bottom: -7px;' alt='alien' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":blank:", "<img src='src/emojis/svg/blank.svg' style='margin-bottom: -7px;' alt='blank face' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":smiley:", "<img src='src/emojis/svg/smiley.svg' alt='smiley face' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":happy:", "<img src='src/emojis/svg/happy.svg' alt='happy face' style='margin-bottom: -7px;' wwidth='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":sad:", "<img src='src/emojis/svg/sad.svg' alt='sad face' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":angry:", "<img src='src/emojis/svg/angry.svg' alt='angry face' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":nerd:", "<img src='src/emojis/svg/nerd.svg' alt='nerd face' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":lol:", "<img src='src/emojis/svg/lol.svg' alt='laughing face' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":textHappy:", "<img src='src/emojis/svg/textHappy.svg' alt='happy face' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":sussedOut:", "<img src='src/emojis/svg/sussedOut.svg' alt='suspicious face' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":goofy:", "<img src='src/emojis/svg/goofy.svg' alt='goofy face' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":mad:", "<img src='src/emojis/svg/mad.svg' alt='mad face' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":joyful:", "<img src='src/emojis/svg/joyful.svg' alt='joyful face' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":moneyEyes:", "<img src='src/emojis/svg/moneyEyes.svg' alt='face with money eyes' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":evil:", "<img src='src/emojis/svg/evil.svg' alt='evil face' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":panic:", "<img src='src/emojis/svg/panic.svg' alt='panicking face' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":dizzy:", "<img src='src/emojis/svg/dizzy.svg' alt='dizzy face' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":jealous:", "<img src='src/emojis/svg/jealous.svg' alt='jealous face' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":smallSmile:", "<img src='src/emojis/svg/smallsmile.svg' alt='face with small smile' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":troll:", "<img src='src/emojis/svg/troll.svg' alt='troll face' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":woof:", "<img src='src/emojis/svg/bark.svg' alt='dog' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":fire:", "<img src='src/emojis/svg/fire.svg' alt='fire' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":pride:", "<img src='src/emojis/svg/pride.svg' alt='pride flag' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":rofl:", "<img src='src/emojis/svg/rofl.svg' alt='rofl' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    .replaceAll(":thumb:", "<img src='src/emojis/svg/thumb.svg' alt='thumbs up' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
    document.getElementById("textbox").innerHTML = response;
}
