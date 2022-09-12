"use strict";
exports.__esModule = true;
exports.networkSchema = void 0;
var joi_1 = require("joi");
exports.networkSchema = joi_1["default"].object({
    title: joi_1["default"].string().required(),
    network: joi_1["default"].string().required(),
    password: joi_1["default"].string().required()
});
