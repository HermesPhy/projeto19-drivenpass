"use strict";
exports.__esModule = true;
var errorUtils_1 = require("../utils/errorUtils");
function handleErrorsMiddleware(err, req, res, next) {
    console.log("An error occured!", err);
    if ((0, errorUtils_1.isAppError)(err)) {
        var statusCode = (0, errorUtils_1.errorTypeToStatusCode)(err.type);
        return res.status(statusCode).send(err.message);
    }
    res.sendStatus(500);
}
exports["default"] = handleErrorsMiddleware;
