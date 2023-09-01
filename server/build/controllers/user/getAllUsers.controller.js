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
exports.getAllUsersController = void 0;
const getAllUsers_service_1 = require("../../services/user/getAllUsers.service");
const getAllUsersController = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, getAllUsers_service_1.getAllUsersService)();
        if (users.length === 0) {
            res.status(404).json({ message: 'No hay usuarios registrados' });
        }
        else {
            res.status(200).json(users);
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error });
    }
});
exports.getAllUsersController = getAllUsersController;
