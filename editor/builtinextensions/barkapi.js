Blockly.Blocks['string_length'] = {
  init: function() {
    this.jsonInit({
{
  "type": "fetch_user",
  "message0": "Get Bark User %1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "USER",
      "text": "BlueOrange"
    },
    {
      "type": "field_dropdown",
      "name": "TYPE",
      "options": [
        [
          "Username",
          "NAME"
        ],
        [
          "Pfp in Data URI",
          "PFP"
        ],
        [
          "Bio",
          "BIO"
        ],
        [
          "Is Bark team?",
          "TEAM"
        ]
      ]
    }
  ],
  "output": "String",
  "colour": 30,
  "tooltip": "Fetches the Bark user's data",
  "helpUrl": ""
}
    });
  }
};

Blockly.Blocks['string_length'] = {
  init: function() {
    this.jsonInit({
{
  "type": "api_working",
  "message0": "Is API Working?",
  "output": "Boolean",
  "colour": 30,
  "tooltip": "BAPIV2 working?",
  "helpUrl": "https://github.com/dumorando/bapiv2/"
}
    });
  }
};
