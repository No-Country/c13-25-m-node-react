"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const userExists_1 = require("../../utils/auth/userExists");
const hashPassword_1 = require("../../utils/auth/hashPassword");
const generateToken_1 = require("../../utils/auth/generateToken");
const getUserByEmail_service_1 = require("../../services/user/getUserByEmail.service");
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    let token;
    try {
        if (!(yield (0, userExists_1.checkIfExists)(email)))
            return res.status(400).json({ message: 'No hay cuenta registrada con ese email' });
        const user = yield (0, getUserByEmail_service_1.getUserByEmail)(email);
        if (user !== null) {
            if (!(yield (0, hashPassword_1.comparePassword)(password, user === null || user === void 0 ? void 0 : user.password)))
                return res.status(401).json({ message: 'Contraseña incorrecta' });
            token = (0, generateToken_1.generateToken)(user === null || user === void 0 ? void 0 : user.email, user === null || user === void 0 ? void 0 : user.password);
            return res.status(200).cookie('Authorization', token, {
                maxAge: 600000,
                httpOnly: true
            }).json({
                user: {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    photourl: user.photourl
                }
            });
        }
        return res.status(500).json({ message: 'Ha ocurrido un error, por favor vuelva a intentarlo' });
    }
    catch (error) {
        let errorMessage;
        if (error instanceof Error)
            errorMessage = error.message;
        return res.status(500).json({ error: errorMessage });
    }
});
exports.loginController = loginController;
