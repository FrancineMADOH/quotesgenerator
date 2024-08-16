"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var main_1 = __importDefault(require("../routes/main"));
var app = (0, express_1.default)();
app.use('/api', main_1.default);
app.get('/', function (req, res) {
    res.render("<h1>Wekcome to the server...</h1>");
});
