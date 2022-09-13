"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.credentialSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.credentialSchema = joi_1["default"].object({
    title: joi_1["default"].string().required(),
    url: joi_1["default"].string().required(),
    username: joi_1["default"].string().required(),
    password: joi_1["default"].string().required()
});
