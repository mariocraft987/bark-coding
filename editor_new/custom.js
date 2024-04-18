Blockly.Blocks['default'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Block name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
 this.setTooltip("lorem ipsum");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['create_elm'] = {
  init: function() {
    this.appendEndRowInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("create element")
        .appendField(new Blockly.FieldTextInput("dog"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("test");
 this.setHelpUrl("");
  }
};   
Blockly.Blocks['delete_elm'] = {
  init: function() {
    this.appendEndRowInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("delete element")
        .appendField(new Blockly.FieldTextInput("dog"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("test");
 this.setHelpUrl("");
  }
};
