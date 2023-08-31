"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = void 0;
const express_validator_1 = require("express-validator");
exports.loginValidator = [
    (0, express_validator_1.body)('email')
        .notEmpty()
        .withMessage('Email no debe estar vacio')
        .isEmail()
        .withMessage('Email formato incorrecto'),
    (0, express_validator_1.body)('password')
        .notEmpty()
        .withMessage('Password no debe estar vacio'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (errors.isEmpty())
            return next();
        const formattedErrors = {};
        for (const key in errors.mapped()) {
            formattedErrors[key] = errors.mapped()[key].msg;
        }
        return res.status(400).json({ errors: formattedErrors });
    }
];
