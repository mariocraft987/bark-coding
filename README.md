![Logo](https://raw.githubusercontent.com/mariocraft987/bark.github.io/main/src/images/Bark.svg)<br>
![Static Badge](https://img.shields.io/badge/made%20using-blockly-yellow?style=for-the-badge&logo=google&logoColor=yellow)
![Static Badge](https://img.shields.io/badge/latest%20release-0.0.1-green?style=for-the-badge&logo=electron&logoColor=green)

# Description
Bark is a website that makes programming easy, so users of any age can create and share games, animations, and everything else! &#128054;<br>
Bark has many features that <a href="https://scratch.mit.edu">Scratch</a>, the inspiration for this project, does not, including:
- Dark mode
- Custom stage size&ast;
- Customize editor layout&ast;
- Paint editor&ast;
- Accounts/Community&ast;
- More features soon, Bark is still in its early stages

`*` = coming soon

![Screenshot of the Bark homepage](https://github.com/mariocraft987/bark.github.io/assets/129226914/c4afcd1e-e9c1-477f-a88f-3ae2f64748e6 "Homepage")<br>
![Screenshot of the Bark code editor](https://github.com/mariocraft987/bark.github.io/assets/129226914/48718313-5243-4b80-92a6-7f986cdb12ec "Code editor")
<hr>

# Contribution
Please read our <a href="https://github.com/mariocraft987/bark.github.io/blob/main/CONTRIBUTING.md">contribution guidelines</a> before contributing.
## Job Registering
To be a part of Bark's development, please comment `Job Register 4067` on <a href="https://github.com/Mariocraft987/bark.github.io/commit/5644df6ebc5aa7ea7b611141a265ff7c17712c5e">here.</a>.
## Contributors
**Thanks** To our **contributors!** If you want to be here. Read **Job Registering.**\
[<img src="https://avatars.githubusercontent.com/u/154646419?v=4" alt="mariocraft" title="mariocraft" width="70" height="70" style="border-radius:100%">](https://github.com/mariocraft987)
[<img src="https://avatars.githubusercontent.com/u/130254323?v=4" alt="nmsderp" title="nmsderp" width="70" height="70" style="border-radius:100%">](https://github.com/nmsderp)
[<img src="https://avatars.githubusercontent.com/u/129226914?v=4" alt="qwertyy" title="qwertyy" width="70" height="70" style="border-radius:100%">](https://github.com/qwertyy-dev)
[<img src="https://avatars.githubusercontent.com/u/158863401?v=4" alt="Rubiidev" title="Rubiidev" width="70" height="70" style="border-radius:100%">](https://github.com/Rubiidev-18)
[<img src="https://avatars.githubusercontent.com/u/144301348?v=4" alt="dumorando" title="dumorando" width="70" height="70" style="border-radius:100%">](https://github.com/dumorando)
[<img src="https://avatars.githubusercontent.com/u/158528051?v=4" alt="Kevenn" title="Kevenn" width="70" height="70" style="border-radius:100%">](https://github.com/QuirkyWorks)
[<img src="https://avatars.githubusercontent.com/u/110662505?v=4" alt="Adam" title="Adam" width="70" height="70" style="border-radius:100%">](https://github.com/Bashamega)
[<img src="https://avatars.githubusercontent.com/u/164731988?v=4" alt="Rubiidev Alt" title="Rubiidev Alt" width="70" height="70" style="border-radius:100%">](https://github.com/Rubiidev18alt)
<hr>

## Help Wanted
We need **programmers** to do the list in the description above.

## How do I add blocks?
*NOTE: Making blocks requires basic knowledge of xml, and some decent knowledge of JavaScript*
  
*NOTE 2: IT WILL MAKE YOUR LIFE EASIER TO USE BLOCKLY BLOCK FACTORY: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html*
  
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
# License
```BSD 2-Clause License

Copyright (c) 2024, The Bark Team

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```
# Disclaimer
Bark is not affiliated with Scratch, Turbowarp, nor PenguinMod. All credit for the idea goes to these founding orginizations.
