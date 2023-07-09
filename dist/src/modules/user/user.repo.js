"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = __importDefault(require("./user.schema"));
const create = (user) => user_schema_1.default.create(user);
const findOne = (credentials) => user_schema_1.default.findOne(credentials);
exports.default = {
    create,
    findOne
};
//# sourceMappingURL=user.repo.js.map