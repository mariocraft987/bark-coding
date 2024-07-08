Blockly.Blocks["test_block"] = {
  init: function () {
    this.appendDummyInput().appendField("Lorem lpsum...");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("A test block, won't work.");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["change_costume"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("String")
      .appendField("switch costume to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip("Changes the costume to a specific one.");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["next_costume"] = {
  init: function () {
    this.jsonInit({
      type: "next_costume",
      message0: "next costume",
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Switches to the next costume",
      helpUrl: "",
    });
  },
};
Blockly.Blocks["reset_size"] = {
  init: function () {
    this.jsonInit({
      type: "resetsize",
      message0: "reset size",
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Resets the size",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["change_stage_bg"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("change stage bg to")
      .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["controls_ifelse"] = {
  init: function () {
    this.appendValueInput("if").setCheck("Boolean").appendField("if");
    this.appendStatementInput("DO1").setCheck(null);
    this.appendDummyInput().appendField("else");
    this.appendStatementInput("DO2").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip(
      "If a value is true then do the statement, if not do the next statement."
    );
    this.setHelpUrl("");
  },
};
Blockly.Blocks["set_position"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("set")
      .appendField(
        new Blockly.FieldDropdown([
          ["x", "X"],
          ["y", "Y"],
        ]),
        "XY"
      )
      .appendField("position to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Sets either X or Y position to a specific value");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["get_position"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("get")
      .appendField(
        new Blockly.FieldDropdown([
          ["x", "X"],
          ["y", "Y"],
        ]),
        "XY"
      )
      .appendField("position");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["movement_move_x"] = {
  init: function () {
    this.appendValueInput("NUM").setCheck("Number").appendField("change x by");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["movement_move_y"] = {
  init: function () {
    this.appendValueInput("NUM").setCheck("Number").appendField("change y by");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["goto_mouse"] = {
  // Moves sprite
  init: function () {
    this.jsonInit({
      type: "goto_mouse",
      message0: "go to mouse pointer",
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    });
  },
};
Blockly.Blocks["center"] = {
  // Moves sprite
  init: function () {
    this.jsonInit({
      type: "center",
      message0: "center",
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    });
  },
};
Blockly.Blocks["forever"] = {
  init: function () {
    this.appendDummyInput().appendField("forever");
    this.appendStatementInput("NAME").setCheck(null).appendField("do");
    this.setPreviousStatement(true, null);
    this.setColour(120);
    this.setTooltip("Does code forever.");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["movement_moveback"] = {
  // Moves sprite back
  init: function () {
    this.jsonInit({
      type: "movement_moveback",
      message0: "move back",
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["logic_keypressed"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("if")
      .appendField(
        new Blockly.FieldDropdown([
          ["Any key", "ANY"],
          ["Up arrow key", "UP"],
          ["Down arrow key", "DOWN"],
          ["Left arrow key", "LEFT"],
          ["Right arrow key", "RIGHT"],
          ["Enter key", "ENTER"],
          ["Shift key", "SHIFT"],
        ]),
        "NAME"
      )
      .appendField("pressed");
    this.setOutput(true, "Boolean");
    this.setColour(210);
    this.setTooltip("Returns if a specific key is pressed.");
    this.setHelpUrl(
      "https://en.scratch-wiki.info/wiki/Key_()_Pressed%3F_(block)"
    );
  },
};

Blockly.Blocks["onstart"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("when")
      .appendField(
        new Blockly.FieldImage("/src/projecttoolbar/run.svg", 25, 25, {
          alt: "*",
          flipRtl: "FALSE",
        })
      )
      .appendField("clicked");
    this.appendStatementInput("start").setCheck(null).appendField("do");
    this.setColour(20);
    this.setTooltip("Does the code when the green button is clicked.");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["onreturn"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("return");
    this.setPreviousStatement(true, null);
    this.setColour(315);
    this.setTooltip("Returns a value");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["onfunction"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("on function")
      .appendField(new Blockly.FieldTextInput("move"), "FUNC");
    this.appendStatementInput("NAME").setCheck(null).appendField("do");
    this.setColour(315);
    this.setTooltip("Code of a function of the chosen name");
    this.setHelpUrl("https://www.w3schools.com/js/js_functions.asp");
  },
};
Blockly.Blocks["dofunction"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("do function")
      .appendField(new Blockly.FieldTextInput("move"), "FUNC");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
    this.setTooltip("Does a function of the chosen name");
    this.setHelpUrl("https://www.w3schools.com/js/js_functions.asp");
  },
};
Blockly.Blocks["alert_block"] = {
  init: function () {
    this.appendValueInput("message").setCheck("String").appendField("alert");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("Alert message to user");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["letters_from"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("letters from")
      .appendField(new Blockly.FieldNumber(0, 0, 999), "FIRST")
      .appendField("to")
      .appendField(new Blockly.FieldNumber(5, 0, 999), "LAST")
      .appendField("of");
    this.setOutput(true, "String");
    this.setColour(150);
    this.setTooltip("Returns the string from 2 number inputs in a variable.");
    this.setHelpUrl("https://scratch.mit.edu/users/legoer3/#comments");
  },
};

Blockly.Blocks["change_size"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("change size by");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip("Changes the size.");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["set_size"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("set size to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip("Sets the size to a specific value.");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["confirm_block"] = {
  init: function () {
    this.appendValueInput("message").setCheck("String").appendField("confirm");
    this.setOutput(true, "Boolean");
    this.setColour(150);
    this.setTooltip("Let user comfirm if a message is true");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["prompt_block"] = {
  init: function () {
    this.appendValueInput("message").setCheck(null).appendField("prompt");
    this.setOutput(true, "String");
    this.setColour(150);
    this.setTooltip("Make the user answer a query");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["fetch"] = {
  init: function () {
    this.appendValueInput("url").setCheck("String").appendField("fetch");
    this.setOutput(true, null);
    this.setColour(150);
    this.setTooltip("Fetch static data from servers!");
    this.setHelpUrl("");
  },
};
