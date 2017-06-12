"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const transform = require("./transform");
const inline = require("./inline");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/example.html");
});

app.post("/", (req, res) => {
    if (!req.body.input) {
        res.json({
            success: false,
            error: "No input specified"
        });
    } else {
        res.json({
            success: true,
            html: inline(transform(req.body.input))
        });
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});