"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const problems_routes_1 = require("./routes/problems.routes");
var app = express();
exports.app = app;
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', problems_routes_1.default);
app.use((_, res) => res.sendFile(path.join(__dirname, 'public', "index.html")));
app.listen(port, () => console.log(`Server listening on ${port}`));
//# sourceMappingURL=app.js.map