      Blockly.Blocks['onstart'] = {
        init: function () {
          this.appendDummyInput()
            .appendField("when")
            .appendField(new Blockly.FieldImage("/src/projecttoolbar/run.svg", 25, 25, { alt: "*", flipRtl: "FALSE" }))
            .appendField("clicked");
          this.appendStatementInput("start")
            .setCheck(null)
            .appendField("do");
          this.setColour(20);
          this.setTooltip("Does the code when the green button is clicked.");
          this.setHelpUrl("");
        }
      };

      Blockly.Blocks['logic_keypressed'] = {
        init: function () {
          this.appendDummyInput()
            .appendField("if")
            .appendField(new Blockly.FieldDropdown([["Any key", "ANY"], ["Up arrow key", "UP"], ["Down arrow key", "DOWN"], ["Left arrow key", "LEFT"], ["Right arrow key", "RIGHT"], ["Enter key", "ENTER"], ["Shift key", "SHIFT"]]), "NAME")
            .appendField("pressed");
          this.setOutput(true, "Boolean");
          this.setColour(210);
          this.setTooltip("Returns if a specific key is pressed.");
          this.setHelpUrl("https://en.scratch-wiki.info/wiki/Key_()_Pressed%3F_(block)");
        }
      };

Blockly.Blocks['logic_mousedown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouse down?");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("If mouse downs, returns True.");
 this.setHelpUrl("https://en.scratch-wiki.info/wiki/Mouse_Down%3F_(block)");
  }
};

Blockly.Blocks['onstop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldImage("https://bark.dumorando.com/src/projecttoolbar/stopped.svg", 15, 15, { alt: "*", flipRtl: "FALSE" }))
        .appendField("clicked");
    this.appendStatementInput("start")
        .setCheck(null);
    this.setColour(20);
 this.setTooltip("Does the code when the stop button is clicked.");
 this.setHelpUrl("");
  }
};
