"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signValidator = void 0;
const express_validator_1 = require("express-validator");
exports.signValidator = [
    (0, express_validator_1.body)('username')
        .notEmpty()
        .withMessage('Username no puede ser un campo vacio')
        .isString()
        .withMessage('Username debe ser un string'),
    (0, express_validator_1.body)('email')
        .notEmpty()
        .withMessage('Email no puede ser un campo vacio')
        .isString()
        .withMessage('Email debe ser un string')
        .isEmail()
        .withMessage('Email no valido'),
    (0, express_validator_1.body)('password')
        .notEmpty()
        .withMessage('Password no puede ser un campo vacio')
        .isString()
        .withMessage('Password debe ser un string')
        .isLength({ min: 8 })
        .withMessage('Password debe contener al menos 8 caracteres'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (errors.isEmpty())
            return next();
        const formattedErrors = {};
        for (const key in errors.mapped()) {
            formattedErrors[key] = errors.mapped()[key].msg;
        }
        return res.status(403).json({ errors: formattedErrors });
    }
];
