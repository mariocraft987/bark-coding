/* Basicly replaces text */
const token = "★";
const emojiWidth = 25;
const emojiHeight = 25;

function t(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(token);
    }
    return arr.join('');
}

function replace(text) {
    return String(text)
         // DO NOT REMOVE. KEEP AT TOP
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        
        // 🔞 i highly reccomend not searching up some of the stuff on here 🔞
        .replaceAll(/(double penetration)+/gim, t(18))
        .replaceAll(/(pearl necklace|rusty trombone)+/gim, t(14))
        .replaceAll(/(sex position|mating press|white power|sex offender)+/gim, t(12))
        .replaceAll(/(doggy style|intercourse)+/gim, t(11))
        .replaceAll(/(kitten lip|strip club|pornograph|paedophile)+/gim, t(10))
        .replaceAll(/(kitty lip|anilingus|camel toe|masturbat|wet dream|stripper|pedophile|marijuana|instagram)+/gim, t(9))
        .replaceAll(/(dick pic|ball sac|pleasure|oral sex|anal sex|creampie|cum shot|fellatio|she-male|she male|tamakeri|cameltoe|ejaculat|find you|jerk off|assmunch|babeland|god damn|facebook|snapchat)+/gim, t(8))
        .replaceAll(/(shut up|shaddup|goddamn|god dam|the hub|pornhub|tea bag|scrotum|ballsac|bukkake|facesit|fluffer|shemale|upskirt|mammary|quickie|undress|gay sex|erotism|eat ass|asshole|bastard|cumming|twitter|discord|patreon)+/gim, t(7))
        .replaceAll(/(penile|vagina|nipple|teabag|ekiben|erotic|tranny|sexcam|rimjob|raping|rapist|rectum|pantie|orgasm|nudity|faggot|incest|murder|hentai|retard|my ass|breast|tiktok|reddit|bereal)+/gim, t(6))
        .replaceAll(/(bitch|pussy|whore|f off|effin|penis|erect|semen|lmfao|smash|cheek|seggs|teste|prick|squaw|thong|vulva|naked|horny|dildo|booty|boner|balls)+/gim, t(5))
        .replaceAll(/(fuck|shit|fock|cunt|cock|dick|gyat|boob|lmao|nude|porn|wank|slut|milf|dilf|yiff|yaoi|twat|tush|rape|pedo|nsfw|jizz|kike|jugg|kill|hump|tidd|2g1c|anus|tits|titt)+/gim, t(4))
        .replaceAll(/(p ⭐️|⬛️ 🟧|cbt|bbc|kys|fag|cum)+/gim, t(3))
        .replaceAll(/(p⭐️|⬛️🟧|69)+/gim, t(2))
        .replaceAll(/(🤱|💦|🕳️|🤤|🍑|🥒|🍆|🖕|😩|😫|🥴|🚛|🍒|🍝|🌽|👅|🥵)+/gim, t(1))
        
        // emojis
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
        .replaceAll(":robot:", "<img src='src/emojis/svg/robot.svg' alt='robot face' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
        .replaceAll(":clap:", "<img src='src/emojis/svg/clap.svg' alt='clapping hands' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")
        .replaceAll(":clapAnim:", "<img src='src/emojis/svg/clap_anim.gif' alt='clapping hands' style='margin-bottom: -7px;' width='"+ emojiWidth + "' height='" + emojiHeight + "'>")

        // devoloper tags
        .replaceAll(/(@mariocraft987 |@mariocraft )+/gim, '<a href="https://github.com/Mariocraft987" style="background-color: #988bbf;height: 16px;display: inline-block;padding: 5px;margin: -5px 3px;border: 1px solid #ebd7ff;border-radius: 10px;color: #ffffff;position: relative;top: 2px; text-decoration: none;"><img src="https://github.com/mariocraft987.png" width="16px" style="border-radius: 50%;"><span style="top: -2px;margin-left: 3px;margin-right: 3px;position: relative;">mariocraft</span></a>')
        .replaceAll(/(@thepython555 |@dumorando )+/gim, '<a href="https://github.com/thepython555" style="background-color: #bebf8b;height: 16px;display: inline-block;padding: 5px;margin: -5px 3px;border: 1px solid #fffcd7;border-radius: 10px;color: #ffffff;position: relative;top: 2px; text-decoration: none;"><img src="https://github.com/thepython555.png" width="16px" style="border-radius: 50%;"><span style="top: -2px;margin-left: 3px;margin-right: 3px;position: relative;">dumorando</span></a>')
        .replaceAll(/(@qwertyy |@qwertyytheartist )+/gim, '<a href="https://github.com/qwertyytheartist" style="background-color: #bfb08b;height: 16px;display: inline-block;padding: 5px;margin: -5px 3px;border: 1px solid #fff4d7;border-radius: 10px;color: #ffffff;position: relative;top: 2px; text-decoration: none;"><img src="https://github.com/qwertyytheartist.png" width="16px" style="border-radius: 50%;"><span style="top: -2px;margin-left: 3px;margin-right: 3px;position: relative;">qwertyy</span></a>')
        .replaceAll(/(@rubiidev-18 |@rubiidev )+/gim, '<a href="https://github.com/Rubiidev-18" style="background-color: #759cd9;height: 16px;display: inline-block;padding: 5px;margin: -5px 3px;border: 1px solid #d7e8ff;border-radius: 10px;color: #ffffff;position: relative;top: 2px; text-decoration: none;"><img src="https://github.com/rubiidev-18.png" width="16px" style="border-radius: 50%;"><span style="top: -2px;margin-left: 3px;margin-right: 3px;position: relative;">Rubiidev</span></a>')
        .replaceAll(/(@nmsderp |@mr_rudy )+/gim, '<a href="https://github.com/nmsderp" style="background-color: #7ad975;height: 16px;display: inline-block;padding: 5px;margin: -5px 3px;border: 1px solid #d7ffe0;border-radius: 10px;color: #ffffff;position: relative;top: 2px; text-decoration: none;"><img src="https://github.com/nmsderp.png" width="16px" style="border-radius: 50%;"><span style="top: -2px;margin-left: 3px;margin-right: 3px;position: relative;">nmsderp</span></a>')
}
