"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const routes_types_1 = require("./routes.types");
const user_route_1 = __importDefault(require("../modules/user/user.route"));
exports.router = [
    new routes_types_1.Route('/user', user_route_1.default),
];
//# sourceMappingURL=routes.data.js.map