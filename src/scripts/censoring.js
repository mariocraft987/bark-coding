/* Basicly censors text */
const token = "❤";

function t(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(token);
    }
    return arr.join('');
}

function censor(text) {
    return String(text)
        .replaceAll(/(shitting)+/gim, t(8))
        .replaceAll(/(fucking|shut up)+/gim, t(7))
        .replaceAll(/(bitch|pussy)+/gim, t(5))
        .replaceAll(/(fuck|shit|fock)+/gim, t(4))
        .replaceAll(/(ass|sex|fok)+/gim, t(4))
}