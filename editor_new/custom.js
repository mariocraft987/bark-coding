Blockly.Blocks['block_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("lorem ipsum");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
 this.setTooltip("Test block.");
 this.setHelpUrl("");
  }
};
