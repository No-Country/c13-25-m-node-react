"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutController = void 0;
const logoutController = (_req, res) => {
    return res.status(200).clearCookie('Authorization').json({
        message: 'Logged out'
    });
};
exports.logoutController = logoutController;
