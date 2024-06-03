// Bark extension handler

//promise to wait for window.workspace to be available
function waitForWorkspace() {
    return new Promise((resolve, reject) => {
        let elapsedTime = 0;

        const checkWorkspace = () => {
            if (window.workspace !== undefined) {
                resolve(window.workspace);
            } else {
                elapsedTime += 100;
                if (elapsedTime >= 10000) {
                    reject(new Error("lol we waited too long"));
                } else {
                    setTimeout(checkWorkspace, 100);
                }
            }
        };

        checkWorkspace();
    });
}

const sineXML = `
<category name="Sine" colour="#19b9c2">
        <block type="sine_move"></block>
        <block type="sine_move2"></block>
        <block type="sine_size"></block>
      </category>
`;

const aiXML = `
<category name="A.I." colour="#5E7D6C">
        <block type="set_chatbot"></block>
        <block type="chatbot_respond"></block>
        <block type="chatbot_tell"></block>
        <block type="chatbot_reset"></block>
      </category>
`;

const barkBlocksXML = `
<category name="Custom" colour="#cf4125">
<block type="create_elm"></block>
<block type="delete_elm"></block>
<block type="get_elm"></block>
</category>
`;

/**
 * to add a hardcoded extension, put the xml in a variable like above then map the element id
 * to the xml with this object
 */
const MapIdToExtensions = {
    "hardcodedSineExtension": sineXML,
    "hardcodedAIExtension": aiXML,
    "hardcodedBarkBlocksExtension": barkBlocksXML
};

//stupid basic state manager
const state = {
    extensionsLoaded: []
};

Object.keys(MapIdToExtensions).forEach(item => {
    document.getElementById(item).addEventListener("click", () => {
        if (!state.extensionsLoaded.includes(item)) {
            //adds the ext to the toolbox xml
            document.getElementById("toolbox").innerHTML += MapIdToExtensions[item];
            //updates the blockly toolbox to match the new xml
            waitForWorkspace()
                .then(workspace => {
                    workspace.updateToolbox(document.getElementById("toolbox").outerHTML);
                    //push it to state so you cant add it twice :bleh:
                    state.extensionsLoaded.push(item);
                });
        }
    });
});