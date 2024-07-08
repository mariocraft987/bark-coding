/**
 * @fileoverview compiles the blocks.
 */

const Blobtodataurl = (blob) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.readAsDataURL(blob);
});

async function downloadPixi(devmode) {
    let dlurl = devmode ? 'https://bark-proxy.replit.app/pixi-dev' : 'https://bark-proxy.replit.app/pixi';
    let code = await fetch(dlurl).then(data=>data.blob());
    let dataurl = await Blobtodataurl(code);
    return dataurl;
}

async function compile(devmode) {
    return `
    <!doctype html>
    <html>
        <head>
            <title>${document.getElementById('projectname').value}</title>
            <script src="${await downloadPixi(devmode)}"></script>
            <style>body {margin:0;}</style>
        </head>
        <body>
            <script type="module">
                // This Code was compiled with https://bark.dumorando.com.
                const app = new PIXI.Application();
                await app.init({ width: 640, height: 360 });
                app.renderer.background.color = 0xffffff;
                document.body.appendChild(app.canvas);

                //load sprite.
                await PIXI.Assets.load('${window.Bark.gui.costume}');
                const sprite = PIXI.Sprite.from('${window.Bark.gui.costume}');
                app.stage.addChild(sprite);
                
                //save og width&height
                const width = sprite.width;
                const height = sprite.height;

                sprite.anchor.set(0.5);

                //center. were making this a func cause were using this 2 times (in blocks & here)
                const center = () => {
                    sprite.x = app.screen.width / 2;
                    sprite.y = app.screen.height / 2;
                }

                center();

                //load the code exported from blockly.
                ${Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace())}
            </script>
        </body>
    </html>
    `;
}

export default compile;