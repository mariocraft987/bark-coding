*NOTE: Making blocks requires basic knowledge of xml, and some decent knowledge of JavaScript*
  
*NOTE 2: IT WILL MAKE YOUR LIFE EASIER TO USE BLOCKLY BLOCK FACTORY: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html*

*NOTE 3: if you wanna request blocks for us to make, change blockrequests.md and open a pull request, then, we will merge if the ideas are good.*
  
First we need to design our block, the block code may look like this:
```javascript
Blockly.Blocks['movement_move'] = { // Moves sprite
        init: function() {
          this.jsonInit({
            "type": "movement_move",
            "message0": "move",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
          });
        }
      };
```
After that we need to add it to the toolbox
```xml
<block type="movement_move">
          <field name="NAME">3</field>
        </block>
```
In Blockly code is ran with generators, in our code we have to define what the blocks do:
```javascript
javascript.javascriptGenerator.forBlock['change_stage_bg'] = function(block, generator) {
        var colorValue = block.getFieldValue('NAME');
        return "changebg('" + colorValue + "');";
    };
```
*TIP: By using block.getFieldValue('value name here'); you can get values from the blocks!*
  
Almost all functions for the new blocks are located inside of sketch.js this is basically the vm of this project. An example is below.
```javascript
function changebg(color) {
  // Set the background color to the provided color
  bgColor = color;
}
```
