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
const user_repo_1 = __importDefault(require("./user.repo"));
const register = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        user = Object.assign({}, user);
        const userCreated = yield user_repo_1.default.create(user);
        if (!userCreated) {
            throw { message: 'USER NOT REGISTRED' };
        }
        return { message: 'REGISTRED SUCCESFULLY!!' };
    }
    catch (e) {
        throw { message: 'SOMETHING WENT WRONG' };
    }
});
const login = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRecord = yield user_repo_1.default.findOne(credentials);
        if (!userRecord) {
            throw { message: 'INVALID CREDENTIALS' };
        }
        return { message: 'SUCESSFULLY LOGGED IN !!' };
    }
    catch (e) {
        throw { message: 'SOMETHING WENT WRONG' };
    }
});
exports.default = {
    register,
    login
};
//# sourceMappingURL=user.service.js.map