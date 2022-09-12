"use strict";
exports.__esModule = true;
exports.decrypt = exports.encrypt = void 0;
var cryptr_1 = require("cryptr");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config({ path: ".env" });
var cryptr = new cryptr_1["default"](process.env.CRYPTR_SECRET);
function encrypt(value) {
    return cryptr.encrypt(value);
}
exports.encrypt = encrypt;
function decrypt(encryptedValue) {
    return cryptr.decrypt(encryptedValue);
}
exports.decrypt = decrypt;
