/* Basicly replaces text */
const token = "█";
const emojisize = 25;

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
        .replaceAll(/(sunset camera)+/gim, t(13))
        .replaceAll(/(sex position|mating press|white power|sex offender)+/gim, t(12))
        .replaceAll(/(doggy style|intercourse)+/gim, t(11))
        .replaceAll(/(kitten lip|strip club|pornograph|paedophile)+/gim, t(10))
        .replaceAll(/(kitty lip|anilingus|camel toe|masturbat|wet dream|stripper|pedophile|marijuana|instagram|slaughter)+/gim, t(9))
        .replaceAll(/(dick pic|ball sac|pleasure|oral sex|anal sex|creampie|cum shot|fellatio|she-male|she male|tamakeri|cameltoe|ejaculat|find you|jerk off|assmunch|babeland|god damn|facebook|snapchat)+/gim, t(8))
        .replaceAll(/(shut up|shaddup|goddamn|god dam|the hub|pornhub|tea bag|scrotum|ballsac|bukkake|facesit|fluffer|shemale|upskirt|mammary|quickie|undress|gay sex|erotism|eat ass|asshole|bastard|cumming|twitter|discord|patreon)+/gim, t(7))
        .replaceAll(/(penile|vagina|nipple|teabag|ekiben|erotic|tranny|sexcam|rimjob|raping|rapist|rectum|pantie|orgasm|nudity|faggot|incest|murder|hentai|retard|my ass|breast|tiktok|reddit|bereal|murder)+/gim, t(6))
        .replaceAll(/(bitch|pussy|whore|f off|effin|penis|erect|semen|lmfao|smash|cheek|seggs|teste|prick|squaw|thong|vulva|naked|horny|dildo|booty|boner|balls)+/gim, t(5))
        .replaceAll(/(fuck|shit|fock|cunt|cock|dick|gyat|boob|lmao|nude|porn|wank|slut|milf|dilf|yiff|yaoi|twat|tush|rape|pedo|nsfw|jizz|kike|jugg|kill|hump|tidd|2g1c|anus|tits|titt|crap)+/gim, t(4))
        .replaceAll(/(p ⭐️|⬛️ 🟧|cbt|bbc|kys|fag|cum|kys)+/gim, t(3))
        .replaceAll(/(p⭐️|⬛️🟧|69)+/gim, t(2))
        .replaceAll(/(🤱|💦|🕳️|🤤|🍑|🥒|🍆|🖕|😩|😫|🥴|🚛|🍒|🍝|🌽|👅|🥵|🤓)+/gim, t(1))
        
        // emojis
        .replaceAll(":amazed:", "<img src='src/emojis/normal/svg/amazed.svg' style='margin-bottom: -7px;' alt='amazed face' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":alien:", "<img src='src/emojis/svg/normal/alien.svg' style='margin-bottom: -7px;' alt='alien' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":smiley:", "<img src='src/emojis/svg/normal/smiley.svg' alt='smiley face' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":happy:", "<img src='src/emojis/svg/normal/happy.svg' alt='happy face' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":sad:", "<img src='src/emojis/svg/normal/sad.svg' alt='sad face' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":angry:", "<img src='src/emojis/svg/normal/angry.svg' alt='angry face' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":lol:", "<img src='src/emojis/svg/normal/lol.svg' alt='laughing face' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":textHappy:", "<img src='src/emojis/svg/normal/textHappy.svg' alt='happy face' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":sussedOut:", "<img src='src/emojis/svg/normal/sussedOut.svg' alt='suspicious face' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":goofy:", "<img src='src/emojis/svg/normal/goofy.svg' alt='goofy face' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":mad:", "<img src='src/emojis/svg/normal/mad.svg' alt='mad face' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":joyful:", "<img src='src/emojis/svg/normal/joyful.svg' alt='joyful face' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":moneyEyes:", "<img src='src/emojis/svg/normal/moneyEyes.svg' alt='face with money eyes' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":evil:", "<img src='src/emojis/svg/normal/evil.svg' alt='evil face' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":panic:", "<img src='src/emojis/svg/normal/panic.svg' alt='panicking face' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":dizzy:", "<img src='src/emojis/svg/normal/dizzy.svg' alt='dizzy face' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":jealous:", "<img src='src/emojis/svg/normal/jealous.svg' alt='jealous face' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":smallSmile:", "<img src='src/emojis/svg/normal/smallsmile.svg' alt='face with small smile' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":troll:", "<img src='src/emojis/svg/normal/troll.svg' alt='troll face' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":woof:", "<img src='src/emojis/svg/normal/bark.svg' alt='dog' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":fire:", "<img src='src/emojis/svg/normal/fire.svg' alt='fire' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":pride:", "<img src='src/emojis/svg/normal/pride.svg' alt='pride flag' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":rofl:", "<img src='src/emojis/svg/normal/rofl.svg' alt='rofl' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":thumb:", "<img src='src/emojis/svg/normal/thumb.svg' alt='thumbs up' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":robot:", "<img src='src/emojis/svg/normal/robot.svg' alt='robot face' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":clap:", "<img src='src/emojis/svg/normal/clap.svg' alt='clapping hands' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":clapAnim:", "<img src='src/emojis/svg/normal/clap_anim.gif' alt='clapping hands' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":barklogo:", "<img src='src/emojis/svg/normal/barklogo.svg' alt='logo' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")

        // emojis of dev
        .replaceAll(":mariocraft:", "<img src='src/emojis/svg/dev/mariocraft.svg' alt='dev' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":qwertyy:", "<img src='src/emojis/svg/dev/qwertyy.png' alt='dev'' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":rubiidev:", "<img src='src/emojis/svg/dev/rubiidev.svg' alt='dev' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":nmsderp:", "<img src='src/emojis/svg/dev/nmsderp.svg' alt='dev'' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")
        .replaceAll(":dumo:", "<img src='src/emojis/svg/dev/dumo.svg' alt='dev' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")

        // joke emojis
        .replaceAll(":mewing:", "<img src='src/emojis/svg/joke/mewing.svg' alt='mewing' style='margin-bottom: -7px;' width='"+ emojisize + "' height='"+ emojisize + "'>")

        // devoloper tags
        .replaceAll(/(@mariocraft987|@mariocraft)+/gim, '<a href="https://github.com/Mariocraft987" style="background-color: #988bbf;height: 16px;display: inline-block;padding: 5px;margin: -5px 3px;border: 1px solid #ebd7ff;border-radius: 10px;color: #ffffff;position: relative;top: 2px; text-decoration: none;"><img src="https://github.com/mariocraft987.png" width="16px" style="border-radius: 50%;"><span style="top: -2px;margin-left: 3px;margin-right: 3px;position: relative;">mariocraft</span></a>')
        .replaceAll(/(@thepython555|@dumorando)+/gim, '<a href="https://github.com/thepython555" style="background-color: #bebf8b;height: 16px;display: inline-block;padding: 5px;margin: -5px 3px;border: 1px solid #fffcd7;border-radius: 10px;color: #ffffff;position: relative;top: 2px; text-decoration: none;"><img src="https://github.com/thepython555.png" width="16px" style="border-radius: 50%;"><span style="top: -2px;margin-left: 3px;margin-right: 3px;position: relative;">dumorando</span></a>')
        .replaceAll(/(@qwertyy|@qwertyytheartist)+/gim, '<a href="https://github.com/qwertyytheartist" style="background-color: #bfb08b;height: 16px;display: inline-block;padding: 5px;margin: -5px 3px;border: 1px solid #fff4d7;border-radius: 10px;color: #ffffff;position: relative;top: 2px; text-decoration: none;"><img src="https://github.com/qwertyytheartist.png" width="16px" style="border-radius: 50%;"><span style="top: -2px;margin-left: 3px;margin-right: 3px;position: relative;">qwertyy</span></a>')
        .replaceAll(/(@rubiidev-18|@rubiidev)+/gim, '<a href="https://github.com/Rubiidev-18" style="background-color: #759cd9;height: 16px;display: inline-block;padding: 5px;margin: -5px 3px;border: 1px solid #d7e8ff;border-radius: 10px;color: #ffffff;position: relative;top: 2px; text-decoration: none;"><img src="https://github.com/rubiidev-18.png" width="16px" style="border-radius: 50%;"><span style="top: -2px;margin-left: 3px;margin-right: 3px;position: relative;">Rubiidev</span></a>')
        .replaceAll(/(@nmsderp|@mr_rudy)+/gim, '<a href="https://github.com/nmsderp" style="background-color: #7ad975;height: 16px;display: inline-block;padding: 5px;margin: -5px 3px;border: 1px solid #d7ffe0;border-radius: 10px;color: #ffffff;position: relative;top: 2px; text-decoration: none;"><img src="https://github.com/nmsderp.png" width="16px" style="border-radius: 50%;"><span style="top: -2px;margin-left: 3px;margin-right: 3px;position: relative;">nmsderp</span></a>')
}
