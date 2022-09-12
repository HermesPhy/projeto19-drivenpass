"use strict";
exports.__esModule = true;
var express_1 = require("express");
require("express-async-errors");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config({ path: ".env" });
var index_js_1 = require("./routes/index.js");
var handleErrorsMiddleware_js_1 = require("./middlewares/handleErrorsMiddleware.js");
var app = (0, express_1["default"])();
app.use((0, express_1.json)());
app.use(index_js_1["default"]);
app.use(handleErrorsMiddleware_js_1["default"]);
var port = +process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Server is up and running on port ".concat(port));
});
