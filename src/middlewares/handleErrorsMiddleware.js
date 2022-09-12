"use strict";
exports.__esModule = true;
var errorUtils_js_1 = require("../utils/errorUtils.js");
function handleErrorsMiddleware(err, req, res, next) {
    console.log("An error occured!", err);
    if ((0, errorUtils_js_1.isAppError)(err)) {
        var statusCode = (0, errorUtils_js_1.errorTypeToStatusCode)(err.type);
        return res.status(statusCode).send(err.message);
    }
    res.sendStatus(500);
}
exports["default"] = handleErrorsMiddleware;
