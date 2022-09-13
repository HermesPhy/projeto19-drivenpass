"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.userSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.userSchema = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    password: joi_1["default"].string().min(10).required()
});
