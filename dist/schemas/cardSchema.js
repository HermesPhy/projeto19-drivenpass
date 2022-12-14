"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.cardSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.cardSchema = joi_1["default"].object({
    title: joi_1["default"].string().required(),
    number: joi_1["default"].string().required(),
    cardHolderName: joi_1["default"].string().required(),
    securityCode: joi_1["default"].string().max(3),
    expirationDate: joi_1["default"].string().required(),
    password: joi_1["default"].string().required(),
    isVirtual: joi_1["default"].boolean().required(),
    type: joi_1["default"].string().required()
});
