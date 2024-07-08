function downloadproject() {
  //get the project name, wich will change the file name.
  let projectname = document.getElementById("projectname").value;

  //get the current state from blockly (the way the blocks are setup)
  const state = Blockly.serialization.workspaces.save(workspace);
  const data = JSON.stringify({
    blockly: btoa(JSON.stringify(state)),
    costume,
    added,
  });

  let blob = new Blob([data], { type: "application/json" });

  //start downloading it
  let a = document.createElement("a");
  a.setAttribute("download", `${projectname}.barkf`);
  a.href = URL.createObjectURL(blob);
  a.setAttribute("target", "_blank");
  a.click();
  URL.revokeObjectURL(a.href);
}

function loadfile(file) {
  let reader = new FileReader();

  reader.onload = async function (event) {
    const data = JSON.parse(event.target.result);

    //dont think this does anytihng but its better to play it safe
    Blockly.getMainWorkspace().clear();

    Blockly.serialization.workspaces.load(
      JSON.parse(atob(data.blockly)),
      workspace
    );
    window.Bark.vm.changeCostume(data.costume);

    // check if its there first to support older bark versions
    if (data.added) {
      for (const extURL of data.added) {
        if (!added.includes(extURL)) {
          const response = await fetch(extURL).then((data) => data.text());
          eval(response);
          added.push(extURL);
        }
      }
    }

    //alert('Workspace loaded successfully!'); shut your happy ass up
  };

  reader.readAsText(file);
}

//setup the events
document.getElementById('downloadbutton').addEventListener('click', () => downloadproject());
document.getElementById('openproject').addEventListener('click', () => document.getElementById('fileInput').click());

//loading thingy

/**
 * vscode give me autofill
 * @type {HTMLInputElement}
 */
let fileinput = document.getElementById('fileInput');

fileinput.addEventListener('change', () => {
    loadfile(fileinput.files[0]);
})
