// Bark extension handler

const sineXML = `
        <block type="sine_move"></block>
        <block type="sine_move2"></block>
        <block type="sine_size"></block>
`;

const aiXML = `
        <block type="set_chatbot"></block>
        <block type="chatbot_respond"></block>
        <block type="chatbot_tell"></block>
        <block type="chatbot_reset"></block>
`;

const customXML = `
        <block type="create_elm"></block>
        <block type="delete_elm"></block>
        <block type="get_elm"></block>
`;


/**
 * to add a hardcoded extension, put the xml in a variable like above then map the element id
 * to the xml with this object
 */
const MapIdToExtensions = {
    "hardcodedSineExtension": sineXML,
    "hardcodedAIExtension": aiXML,
    "hardcodedCustomBlocksExtension": customXML
};

//stupid basic state manager
const state = {
    extensionsLoaded: []
};

Object.keys(MapIdToExtensions).forEach(item => {
    document.getElementById(item).addEventListener("click", () => {
        if (!state.extensionsLoaded.includes(item)) {
            //push it to state so you cant add it twice :bleh:
            state.extensionsLoaded.push(item);
        }
    });
});

function extflyoutcallback(workspace) {
    return state.extensionsLoaded.map(item => MapIdToExtensions[item]);
}

setTimeout(() => Blockly.getMainWorkspace().registerToolboxCategoryCallback('EXTS', extflyoutcallback), 2000);