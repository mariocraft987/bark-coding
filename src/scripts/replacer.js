const token = "*";
const emojisize = 25;

const emojis = [
    {
        token: ":actingSus:",
        emoji: "actingSus",
        url: "/src/emojis/svg/normal/actingSus.svg"
    },
    {
        token: ":amazed:",
        emoji: "amazed",
        url: "/src/emojis/svg/normal/amazed.svg"
    },
    {
        token: ":amongus:",
        emoji: "amongus",
        url: "/src/emojis/svg/joke/amongus.svg"
    },
    {
        token: ":alien:",
        emoji: "alien",
        url: "/src/emojis/svg/normal/alien.svg"
    },
    {
        token: ":smiley:",
        emoji: "smiley",
        url: "/src/emojis/svg/normal/smiley.svg"
    },
    {
        token: ":happy:",
        emoji: "happy",
        url: "/src/emojis/svg/normal/happy.svg"
    },
    {
        token: ":sad:",
        emoji: "sad",
        url: "/src/emojis/svg/normal/sad.svg"
    },
    {
        token: ":angry:",
        emoji: "angry",
        url: "/src/emojis/svg/normal/angry.svg"
    },
    {
        token: ":raisedEyebrow:",
        emoji: "raisedEyebrow",
        url: "/src/emojis/svg/normal/raiseEyebrow.svg"
    },
    {
        token: ":loading:",
        emoji: "loading",
        url: "/src/emojis/svg/normal/loading.svg"
    },
    {
        token: ":lol:",
        emoji: "lol",
        url: "/src/emojis/svg/normal/lol.svg"
    },
    {
        token: ":textHappy:",
        emoji: "textHappy",
        url: "/src/emojis/svg/normal/textHappy.svg"
    },
    {
        token: ":sussedOut:",
        emoji: "sussedOut",
        url: "/src/emojis/svg/normal/sussedOut.svg"
    },
    {
        token: ":goofy:",
        emoji: "goofy",
        url: "/src/emojis/svg/normal/goofy.svg"
    },
    {
        token: ":mad:",
        emoji: "mad",
        url: "/src/emojis/svg/normal/mad.svg"
    },
    {
        token: ":joyful:",
        emoji: "joyful",
        url: "/src/emojis/svg/normal/joyful.svg"
    },
    {
        token: ":moneyEyes:",
        emoji: "moneyEyes",
        url: "/src/emojis/svg/normal/moneyEyes.svg"
    },
    {
        token: ":evil:",
        emoji: "evil",
        url: "/src/emojis/svg/normal/evil.svg"
    },
    {
        token: ":panic:",
        emoji: "panic",
        url: "/src/emojis/svg/normal/panic.svg"
    },
    {
        token: ":dizzy:",
        emoji: "dizzy",
        url: "/src/emojis/svg/normal/dizzy.svg"
    },
    {
        token: ":jealous:",
        emoji: "jealous",
        url: "/src/emojis/svg/normal/jealous.svg"
    },
    {
        token: ":smallsmile:",
        emoji: "smallsmile",
        url: "/src/emojis/svg/normal/smallsmile.svg"
    },
    {
        token: ":troll:",
        emoji: "troll",
        url: "/src/emojis/svg/normal/troll.svg"
    },
    {
        token: ":fire:",
        emoji: "fire",
        url: "/src/emojis/svg/normal/fire.svg"
    },
    {
        token: ":pride:",
        emoji: "pride",
        url: "/src/emojis/svg/normal/pride.svg"
    },
    {
        token: ":rofl:",
        emoji: "rofl",
        url: "/src/emojis/svg/normal/rofl.svg"
    },
    {
        token: ":skibidi:",
        emoji: "skibidi",
        url: "/src/emojis/svg/joke/skibidi.svg"
    },
    {
        token: ":thumb:",
        emoji: "thumb",
        url: "/src/emojis/svg/normal/thumb.svg"
    },
    {
        token: ":robot:",
        emoji: "robot",
        url: "/src/emojis/svg/normal/robot.svg"
    },
    {
        token: ":loading:",
        emoji: "loading",
        url: "/src/emojis/svg/normal/loading.svg"
    },
    {
        token: ":clapAnim:",
        emoji: "clapAnim",
        url: "/src/emojis/svg/normal/clap_anim.gif"
    },
    {
        token: ":clap:",
        emoji: "clap",
        url: "/src/emojis/svg/normal/clap.svg"
    },
    /*{
        token: ":emojiName:",
        emoji: "emoji name",
        url: "emoji image link"
    },*/
];

function t(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(token);
    }
    return arr.join('');
}

function replace(text) {
    let start = String(text)
        // DO NOT REMOVE. KEEP AT TOP
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")

        // Some terms listed here are only slices of words. this is because there are many different words (generally offensive and sexual) that begin with these terms.
        // 🆘 I wouldn't recommend searching these terms 🆘
        .replaceAll(/(strip club|prostitute)+/gim, t(10))
        .replaceAll(/(paedophile|wet dream)+/gim, t(9))
        .replaceAll(/(ejaculat|beastial|masturbat|testicle|pedophile|stripper)+/gim, t(8))
        .replaceAll(/(cumming|asshole|bestial|cocaine|jackass)+/gim, t(7))
        .replaceAll(/(penile|virgin|breast|condom|faggot|incest|molest|retard|rapist|hentai|orgasm|nudity)+/gim, t(6))
        .replaceAll(/(bitch|pussy|penis|vagin|prick|whore|booty|boner|erect|horny|skank|sperm|teste|eroti|balls|semen|ligma)+/gim, t(5))
        .replaceAll(/(fuck|dick|cock|cunt|nigg|slut|porn|boob|jizz|milf|dilf|pimp|rape|sext|nude|tits|titt)+/gim, t(4))
        .replaceAll(/(sex|hoe|wtf|kys|gta)+/gim, t(3))
        .replaceAll(/(🤱|💦|🕳️|🤤|🍑|🍆|🖕|😩|😫|🍒|🥵|🤓|👙|🥒)+/gim, t(1))

        // emojis of dev
        .replaceAll(":mariocraft:", "<img src='/src/emojis/svg/dev/mariocraft.svg' alt='dev' style='margin-bottom: -7px;' width='" + emojisize + "' height='" + emojisize + "'>")
        .replaceAll(":qwertyy:", "<img src='/src/emojis/svg/dev/qwertyy.png' alt='dev'' style='margin-bottom: -7px;' width='" + emojisize + "' height='" + emojisize + "'>")
        .replaceAll(":rubiidev:", "<img src='/src/emojis/svg/dev/rubiidev.svg' alt='dev' style='margin-bottom: -7px;' width='" + emojisize + "' height='" + emojisize + "'>")
        .replaceAll(":nmsderp:", "<img src='/src/emojis/svg/dev/nmsderp.svg' alt='dev'' style='margin-bottom: -7px;' width='" + emojisize + "' height='" + emojisize + "'>")
        .replaceAll(":dumo:", "<img src='/src/emojis/svg/dev/dumo.svg' alt='dev' style='margin-bottom: -7px;' width='" + emojisize + "' height='" + emojisize + "'>")

        // joke emojis
        .replaceAll(":mewing:", "<img src='/src/emojis/svg/joke/mewing.svg' alt='mewing' style='margin-bottom: -7px;' width='" + emojisize + "' height='" + emojisize + "'>")

        // devoloper tags
        .replaceAll(/(@mariocraft987|@mariocraft)+/gim, '<a href="https://github.com/Mariocraft987" style="background-color: #988bbf;height: 16px;display: inline-block;padding: 5px;margin: -5px 3px;border: 1px solid #ebd7ff;border-radius: 10px;color: #ffffff;position: relative;top: 2px; text-decoration: none;"><img src="https://github.com/mariocraft987.png" width="16px" style="border-radius: 50%;"><span style="top: -2px;margin-left: 3px;margin-right: 3px;position: relative;">mariocraft</span></a>')
        .replaceAll(/(@thepython555|@dumorando)+/gim, '<a href="https://github.com/dumorando" style="background-color: #bebf8b;height: 16px;display: inline-block;padding: 5px;margin: -5px 3px;border: 1px solid #fffcd7;border-radius: 10px;color: #ffffff;position: relative;top: 2px; text-decoration: none;"><img src="https://github.com/thepython555.png" width="16px" style="border-radius: 50%;"><span style="top: -2px;margin-left: 3px;margin-right: 3px;position: relative;">dumorando</span></a>')
        .replaceAll(/(@breakfast)+/gim, '<a href="https://github.com/breakfast-for-dinner" style="background-color: #bfb08b;height: 16px;display: inline-block;padding: 5px;margin: -5px 3px;border: 1px solid #fff4d7;border-radius: 10px;color: #ffffff;position: relative;top: 2px; text-decoration: none;"><img src="https://github.com/breakfast-for-dinner.png" width="16px" style="border-radius: 50%;"><span style="top: -2px;margin-left: 3px;margin-right: 3px;position: relative;">breakfast</span></a>')
        .replaceAll(/(@rubiidev-18|@rubiidev)+/gim, '<a href="https://github.com/Rubiidev-18" style="background-color: #759cd9;height: 16px;display: inline-block;padding: 5px;margin: -5px 3px;border: 1px solid #d7e8ff;border-radius: 10px;color: #ffffff;position: relative;top: 2px; text-decoration: none;"><img src="https://github.com/rubiidev-18.png" width="16px" style="border-radius: 50%;"><span style="top: -2px;margin-left: 3px;margin-right: 3px;position: relative;">Rubiidev</span></a>')
        .replaceAll(/(@nmsderp|@mr_rudy)+/gim, '<a href="https://github.com/nmsderp" style="background-color: #7ad975;height: 16px;display: inline-block;padding: 5px;margin: -5px 3px;border: 1px solid #d7ffe0;border-radius: 10px;color: #ffffff;position: relative;top: 2px; text-decoration: none;"><img src="https://github.com/nmsderp.png" width="16px" style="border-radius: 50%;"><span style="top: -2px;margin-left: 3px;margin-right: 3px;position: relative;">nmsderp</span></a>')


        function getSecondHalf(str, coin) {
            return str.split(coin).pop()
        }

        function getFirstHalf(str, coin) {
            return str.substring(0, str.indexOf(coin));
        }
    
        if (text.includes('https://')) {
            text = text.replace("https://", "<a href='")
            let link = getSecondHalf(text, "https://")
            let wordlength = getFirstHalf(text, "https://")
                for (let e = Number(wordlength.length); text.charAt(e) != ' ';) {
                    text = text.charAt(e).replace(` `, `'></a>`)
                    e++
                }
            }

        // allow newlines
        .replaceAll(/\n/g, "<br>")

    for (const emoji of emojis) {
        start = String(start).replaceAll(`${emoji.token}`, `<img src='${emoji.url}' alt=':${emoji.emoji}:' style='margin-bottom: -7px;' width='${emojisize}' height='${emojisize}'>`);
    }

    return start;
}
const lang = localStorage.getItem('lang');
function translate(id, val) {
    const elements = document.getElementsByClassName(id);
    if (elements.length > 0) {
        Array.from(elements).forEach(element => {
            element.innerHTML = val;
        });
    }
}
if (lang) {
    const obj = JSON.parse(lang);
    const url = `${window.location.origin}/src/translations/${obj.file}`;
    if(obj.file !== 'en.json'){
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    translate(key, data[key]);
                }
            }
        })
    }


}
