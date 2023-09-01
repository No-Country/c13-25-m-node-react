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
exports.getUserByIdController = void 0;
const mongoose_1 = require("mongoose");
const getUserById_service_1 = require("../../services/user/getUserById.service");
const getUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!mongoose_1.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Id de usuario invalido' });
    }
    try {
        const foundUser = yield (0, getUserById_service_1.getUserByIdService)(new mongoose_1.Types.ObjectId(id));
        if (foundUser == null) {
            return res.status(404).json({ message: 'User not Found' });
        }
        return res.status(200).json(foundUser);
    }
    catch (error) {
        return res.status(500).send('Error de servidor');
    }
});
exports.getUserByIdController = getUserByIdController;
