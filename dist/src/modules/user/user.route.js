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
const express_1 = require("express");
const user_service_1 = __importDefault(require("./user.service"));
const user_validations_1 = require("./user.validations");
const router = (0, express_1.Router)();
router.post('/register', user_validations_1.CreateUserValidator, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const result = yield user_service_1.default.register(user);
        res.send(result);
    }
    catch (e) {
        next(e);
    }
}));
router.post('/login', user_validations_1.LoginValidator, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const credentials = req.body;
        const result = yield user_service_1.default.login(credentials);
        res.send(result);
    }
    catch (e) {
        next(e);
    }
}));
exports.default = router;
//# sourceMappingURL=user.route.js.map