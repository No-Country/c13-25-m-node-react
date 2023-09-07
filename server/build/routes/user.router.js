"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const getAllUsers_controller_1 = require("../controllers/user/getAllUsers.controller");
const getUserById_controller_1 = require("../controllers/user/getUserById.controller");
const register_controller_1 = require("../controllers/user/register.controller");
const login_controller_1 = require("../controllers/user/login.controller");
const signValidator_middleware_1 = require("../middleware/signValidator.middleware");
const updateUser_controller_1 = require("../controllers/user/updateUser.controller");
const loginValidator_middleware_1 = require("../middleware/loginValidator.middleware");
const passport_1 = __importDefault(require("passport"));
const logout_controller_1 = require("../controllers/user/logout.controller");
const userRouter = express_1.default.Router();
// GET ALL USERS
userRouter.get('/', passport_1.default.authenticate('jwt', { session: false }), getAllUsers_controller_1.getAllUsersController);
// GET USER BY ID
userRouter.get('/:id', passport_1.default.authenticate('jwt', { session: false }), getUserById_controller_1.getUserByIdController);
// CREATE NEW USER
userRouter.post('/register', signValidator_middleware_1.signValidator, register_controller_1.registerController);
// LOGIN USER
userRouter.post('/login', loginValidator_middleware_1.loginValidator, login_controller_1.loginController);
// LOGOUT USER
userRouter.post('/logout', passport_1.default.authenticate('jwt', { session: false }), logout_controller_1.logoutController);
// UPDATE EXISTING USER
userRouter.put('/:id', passport_1.default.authenticate('jwt', { session: false }), signValidator_middleware_1.signValidator, updateUser_controller_1.updateUserController);
exports.default = userRouter;
