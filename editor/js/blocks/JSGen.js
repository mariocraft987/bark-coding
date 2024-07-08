javascript.javascriptGenerator.forBlock["onstart"] = function (
  block,
  generator
) {
  return "alert('run button was clicked!');";
};

javascript.javascriptGenerator.forBlock["movement_move_x"] = function (
  block,
  generator
) {
  return "sprite.x += " + block.getFieldValue("NUM") + ";\n";
};

javascript.javascriptGenerator.forBlock["movement_move_y"] = function (
  block,
  generator
) {
  return "sprite.y += " + block.getFieldValue("NUM") + ";\n";
};

javascript.javascriptGenerator.forBlock["movement_moveback"] = function (
  block,
  generator
) {
  return "sprite.x -= 5;\n";
};

javascript.javascriptGenerator.forBlock["goto_mouse"] = function (
  block,
  generator
) {
  return "gotomouse();";
};

javascript.javascriptGenerator.forBlock["change_stage_bg"] = function (
  block,
  generator
) {
  let colorValue = block.getFieldValue("NAME");
  return "changebg('" + colorValue + "');";
};

javascript.javascriptGenerator.forBlock["alert_block"] = function (
  block,
  generator
) {
  let message = block.getFieldValue("message");
  return "alert('" + message + "');";
};

javascript.javascriptGenerator.forBlock["resetsize"] = function (
  block,
  generator
) {
  let message = block.getFieldValue("message");
  return "resetsize();";
};

javascript.javascriptGenerator.forBlock["confirm_block"] = function (
  block,
  generator
) {
  let message = block.getFieldValue("message");
  return "confirm('" + message + "');";
};

javascript.javascriptGenerator.forBlock["prompt_block"] = function (
  block,
  generator
) {
  let message = block.getFieldValue("message");
  return ["prompt('" + message + "');", Blockly.JavaScript.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock["center"] = function (
  block,
  generator
) {
  return "center();\n";
};

javascript.javascriptGenerator.forBlock["set_size"] = function (
  block,
  generator
) {
  let message = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return "setsize(Number('" + message + "'));";
};

javascript.javascriptGenerator.forBlock["change_size"] = function (
  block,
  generator
) {
  let message = block.getFieldValue("message");
  return "setsize('imgWidth + " + message + "');";
};

javascript.javascriptGenerator.forBlock["fetch"] = function (block, generator) {
  let uri = block.getFieldValue("url");
  let handleFunction = generator.variableDB_.getDistinctName(
    "handlefetch",
    Blockly.Variables.NAME_TYPE
  );
  generator.addFunction(
    handleFunction,
    `async function ${handleFunction}(url) {
          try {
              const response = await fetch(url);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              return data;
          } catch (error) {
              console.error('Fetch error:', error);
              return null;
          }
      }`
  );
  return `${handleFunction}('${uri}')`;
};
