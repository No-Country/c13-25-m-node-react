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
exports.registerController = void 0;
const userExists_1 = require("../../utils/auth/userExists");
const createUser_service_1 = require("../../services/user/createUser.service");
const generateToken_1 = require("../../utils/auth/generateToken");
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user;
    let token;
    try {
        if (yield (0, userExists_1.checkIfExists)(req.body.email))
            return res.status(400).json({ message: 'El email se encuentra registrado' });
        const newUser = yield (0, createUser_service_1.createUserService)(req.body);
        if (typeof newUser !== 'string') {
            token = (0, generateToken_1.generateToken)(newUser.email, newUser.password);
            user = {
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                photourl: newUser.photourl
            };
        }
        return res.json({
            message: 'Usuario creado',
            user,
            token
        });
    }
    catch (error) {
        let errorMessage;
        if (error instanceof Error)
            errorMessage = error.message;
        return res.status(500).json({
            message: 'Error creando el usuario, por favor vuelva a intentarlo',
            error: `${errorMessage}`
        });
    }
});
exports.registerController = registerController;
