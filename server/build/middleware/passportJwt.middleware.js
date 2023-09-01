"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passportMiddleware = void 0;
const passport_jwt_1 = require("passport-jwt");
const User_1 = __importDefault(require("./../models/User"));
const opts = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};
exports.passportMiddleware = new passport_jwt_1.Strategy(opts, (payload, done) => {
    try {
        const user = User_1.default.findOne({ email: payload.email });
        if (user !== null)
            return done(null, user);
        return done(null, false);
    }
    catch (error) {
        let errorMessage;
        if (error instanceof Error)
            errorMessage = error.message;
        return errorMessage;
    }
});
