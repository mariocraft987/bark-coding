Blockly.Blocks['change_title'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Change website title to:")
        .appendField(new Blockly.FieldTextInput("Cool title"), "TITLE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("Changes the website title");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['change_title'] = function(block, generator) {
  var text_title = block.getFieldValue('TITLE');
  var code = `document.title = ${text_title}`;
  return code;
};

let randomlyBlocks = Bark.CreateCategory("Randomly Blox", "#07f290");
randomlyBlocks.addBlock(Bark.CreateBlock("change_title"));

Bark.AppendCategoryToToolbox(randomlyBlocks);
