"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    photourl: {
        type: String,
        default: 'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png'
    }
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
