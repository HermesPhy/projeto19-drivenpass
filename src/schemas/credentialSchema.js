"use strict";
exports.__esModule = true;
exports.credentialSchema = void 0;
var joi_1 = require("joi");
exports.credentialSchema = joi_1["default"].object({
    title: joi_1["default"].string().required(),
    url: joi_1["default"].string().required(),
    username: joi_1["default"].string().required(),
    password: joi_1["default"].string().required()
});
