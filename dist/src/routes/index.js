"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMiddlewares = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = require("express");
const routes_data_1 = require("./routes.data");
const registerMiddlewares = (app) => {
    app.use((0, cors_1.default)());
    app.use((0, express_1.json)());
    for (let route of routes_data_1.router) {
        app.use(route.path, route.router);
    }
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).send(err);
    });
};
exports.registerMiddlewares = registerMiddlewares;
//# sourceMappingURL=index.js.map