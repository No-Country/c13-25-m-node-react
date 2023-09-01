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
exports.updateUserController = void 0;
const mongoose_1 = require("mongoose");
const updateUser_service_1 = require("../../services/user/updateUser.service");
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!mongoose_1.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Id de usuario invalido' });
    }
    try {
        const user = yield (0, updateUser_service_1.updateUserService)(new mongoose_1.Types.ObjectId(id), req.body);
        if (user === null) {
            return res.status(404).json({ message: 'El usuario no existe' });
        }
        return res
            .status(200)
            .json({ message: 'El usuario se ha actualizado', user });
    }
    catch (error) {
        return res.status(500).json({ message: 'Error en el servidor', error });
    }
});
exports.updateUserController = updateUserController;
