"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const api_1 = __importDefault(require("./routes/api"));
const passport_1 = __importDefault(require("passport"));
const helmet_1 = __importDefault(require("helmet"));
const passportJwt_middleware_1 = require("./middleware/passportJwt.middleware");
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: '*',
    credentials: true
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
passport_1.default.use(passportJwt_middleware_1.passportMiddleware);
app.use('/v1', api_1.default);
app.get('/', (_req, res) => res.json({ message: 'Welcome to our API' }));
app.use((_req, res) => {
    res.status(404).json({ success: false, message: 'Not Found' });
});
exports.default = app;
