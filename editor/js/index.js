//init the global
window.Bark = {
    gui: {},
    vm: {}
};

//setup the blocks
await import('/editor/js/blocks/Definitions.js');
await import('/editor/js/blocks/JSGen.js');

//setup ui shit
await import('/editor/js/serialization.js');
await import('/editor/js/ui.js');
await import('/editor/js/misc/coderunner.js')

//init stuff
window.Bark.gui.costume = "/src/images/dog/scratch_dog.png";
window.Bark.gui.added = [];

//handle hardcoded extensions
Array.from(document.querySelectorAll("*")).forEach((item) => {
  if (item.getAttribute("data-extensionpath")) {
    item.addEventListener("click", () => {
      if (!window.Bark.gui.added.includes(item.getAttribute("data-extensionpath"))) {
        window.Bark.gui.added.push(item.getAttribute("data-extensionpath"));
        fetch(item.getAttribute("data-extensionpath"))
          .then((data) => data.text())
          .then((data) => {
            eval(data);
          });
      }
    });
  }
});

//setup the blockly workspace
async function start() {
  //download the workspace then save it to the dom
  const workspace = await fetch(`/editor/toolbox.xml`).then( data => data.text() );
  document.body.innerHTML += workspace;
  //save it as a global to make life easier
  window.workspace = Blockly.inject("blocklyDiv", {
    toolbox: document.getElementById("toolbox"),
    horizontalLayout: true,
    toolboxPosition: "end",
    renderer: "zelos",
  });

  window.workspace.registerButtonCallback("showExtsMenu", () => {
    document.querySelector(".popupholder").classList.add("active");
  });
}

//run that func when the tab is loaded
if (document.readyState !== "complete") {
    window.addEventListener('load', start);
} else {
    start();
}