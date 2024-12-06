function image_badge(url, name) {
    return `<img src="${url}" title="${url}" alt="${url} badge" width="36" style="image-rendering: pixelated;">`;
}

function setup_badges(name) {
    if (name = "marioc") {
        document.getElementById("username").outerHTML += image_badge("https://bark.dumorando.com/src/images/assets/badges/b_dog.png", "Dogggggg");
    }
}
