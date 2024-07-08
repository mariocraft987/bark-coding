import waitfor from "./misc/waitforblockly.js";
import compile from "./vm/compile.js";
console.log("running");

window.Bark.gui.run = (async () => {
    document.querySelector('#compiling').classList.add('active');
    let compiled = await compile(true);
    document.querySelector('#compiling').classList.remove('active');
    let container = document.getElementById('stage');
    container.innerHTML = '';
    let newiframe = document.createElement('iframe');
    
    newiframe.style.width = '100%';
    newiframe.style.height = '100%';
    newiframe.srcdoc = compiled
    
    container.appendChild(newiframe);
});

function toggledarkmode() {
  const body = document.body;

  body.classList.toggle("dark-mode");

  const dark = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", dark);
  initializeDarkMode();
}

//define it ourselves because this fuck ass script wont load it from esm.run
const themedark = Blockly.Theme.defineTheme("dark", {
  base: Blockly.Themes.Classic,
  componentStyles: {
    workspaceBackgroundColour: "#1e1e1e",
    toolboxBackgroundColour: "blackBackground",
    toolboxForegroundColour: "#fff",
    flyoutBackgroundColour: "#252526",
    flyoutForegroundColour: "#ccc",
    flyoutOpacity: 1,
    scrollbarColour: "#797979",
    insertionMarkerColour: "#fff",
    insertionMarkerOpacity: 0.3,
    scrollbarOpacity: 0.4,
    cursorColour: "#d0d0d0",
    blackBackground: "#333",
  },
});

function initializeDarkMode() {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  const body = document.body;
  if (isDarkMode) {
    body.classList.add("dark-mode");
    console.log(window.workspace);
    window.workspace.setTheme(themedark);
    window.workspace.refreshTheme();
  } else {
    body.classList.remove("dark-mode");
    window.workspace.setTheme();
    window.workspace.refreshTheme();
  }
}

//waits for blockly
waitfor().then(initializeDarkMode)

const dmb = document.getElementById('darkModeToggle');
dmb.addEventListener('click', toggledarkmode);