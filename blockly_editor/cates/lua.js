Blockly.Blocks['print_string'] = {
    init: function() {
      this.appendValueInput("VAL")
          .setCheck("String")
          .appendField("print");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("Prints a variable.");
   this.setHelpUrl("");
    }
  };