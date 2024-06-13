//this is an express server to simulate the vercel.json in a development environment
//type "node server.js"

//install express
const childprocess = require("child_process");
childprocess.execSync("pnpm i express");
require('fs').unlinkSync('pnpm-lock.yaml');

//the server
const express = require("express");
const app = express();

app.use(express.static("."));

const fs = require("fs");
const path = require("path");

const verceljson = JSON.parse(fs.readFileSync("vercel.json", "utf-8"));
const rewrites = verceljson.rewrites;

rewrites.forEach(item => {
    app.get(item.source, (_,res) => {
        res.sendFile(path.resolve("." + item.destination));
    });
});

app.listen(8080, () => {
    console.log("bark development server running on port 8080.");
});