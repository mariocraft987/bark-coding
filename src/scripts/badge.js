function image_badge(url, name) {
    return `<a href="https://bark.dumorando.com/docs#/Badges"><img src="${url}" title="${name} Badge" alt="has ${name} badge" width="36" style="image-rendering: pixelated; cursor: help;"></a>`;
}

function setup_badges(name) {
    if (name == "marioc") {
        document.getElementById("username").outerHTML += image_badge("https://bark.dumorando.com/src/images/assets/badges/b_dog.png", "Dogggggg");
    }
    if (name == "marioc" || name == "breakfast" || name == "dumo" || name == "nmsderp" || name == "Rubii484Bark") {
        document.getElementById("username").outerHTML += image_badge("https://bark.dumorando.com/src/images/assets/badges/b_dev.png", "DEVELOPERRR");
    }
    if (name == "RarestUsername") {
        document.getElementById("username").outerHTML += image_badge("https://bark.dumorando.com/src/images/assets/badges/b_bruh.png", "Bruh");
    }
}
