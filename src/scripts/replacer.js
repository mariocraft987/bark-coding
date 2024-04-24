/* Basicly replaces text. Script from Penguinmod */
const token = "*";
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

        // some terms listed here are only slices of words. this is because there are many different words (generally offensive) that begin with these terms
        .replace(/(strip club|prostitute)+/gim, t(10))
        .replace(/(paedophile|wet dream)+/gim, t(9))
        .replace(/(ejaculat|beastial|masturbat|testicle|pedophile|stripper)+/gim, t(8))
        .replace(/(shut up|cumming|asshole|bestial|cocaine|jackass)+/gim, t(7))
        .replace(/(penile|virgin|breast|condom|faggot|incest|molest|retard|rapist|hentai|orgasm|nudity)+/gim, t(6))
        .replace(/(bitch|pussy|penis|vagin|prick|whore|booty|boner|erect|horny|skank|sperm|teste|eroti|semen)+/gim, t(5))
        .replace(/(fuck|shit|dick|cock|cunt|nigg|piss|slut|arse|porn|boob|jizz|milf|dilf|pimp|rape|shat|sext|nude|anus|tits|titt)+/gim, t(4))
        .replace(/(sex|hoe|wtf|kys)+/gim, t(3));
        .replaceAll(/(🤱|💦|🕳️|🤤|🍑|🍆|🖕|😩|😫|🍒|🥵|🤓|👙)+/gim, t(1))
        
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
