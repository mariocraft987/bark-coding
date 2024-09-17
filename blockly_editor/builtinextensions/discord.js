const db_run = {
  init: function() {
    this.appendDummyInput('1')
      .appendField('run discord bot')
      .appendField(new Blockly.FieldTextInput('name'), 'NAME');
    this.appendStatementInput('CODE');
    this.appendDummyInput('2')
      .appendField('token')
      .appendField(new Blockly.FieldTextInput('...'), 'TOKEN');
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(345);
  }
};
Blockly.common.defineBlocks({db_run: db_run});

let discordCategory = Bark.CreateCategory("Discord", "#5865f2");

discordCategory.addBlock(Bark.CreateBlock("db_run"));

Bark.AppendCategoryToToolbox(discordCategory);
