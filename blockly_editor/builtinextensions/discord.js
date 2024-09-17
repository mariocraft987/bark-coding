Blockly.defineBlocksWithJsonArray([
    { // Run event
  "type": "db_run",
  "message0": "run discord bot %1 %2 %3 token %4",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "name"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    },
    {
      "type": "field_input",
      "name": "TOKEN",
      "text": "MTIzIWq..."
    }
  ],
  "colour": 345,
  "tooltip": "",
  "helpUrl": ""
}
]);

let discordCategory = Bark.CreateCategory("Discord", "#5865f2");

discordCategory.addBlock(Bark.CreateBlock("db_run"));

Bark.AppendCategoryToToolbox(discordCategory);
