// hi :)

var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = '/game_engine/bicon.ico';

function starteditor() {
    console.log("Running editor...")
}
