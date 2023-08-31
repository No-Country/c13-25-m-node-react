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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserService = void 0;
const User_1 = __importDefault(require("../../models/User"));
const hashPassword_1 = require("../../utils/auth/hashPassword");
const updateUserService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = data;
    return (yield User_1.default.findByIdAndUpdate(id, {
        password: yield (0, hashPassword_1.hashPassword)(password)
    }, { new: true }).select('-password -__v'));
});
exports.updateUserService = updateUserService;
