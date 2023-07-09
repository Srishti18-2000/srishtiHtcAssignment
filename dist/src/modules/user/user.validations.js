"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginValidator = exports.CreateUserValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.CreateUserValidator = [
    (0, express_validator_1.body)('first_name').isString().notEmpty().withMessage("first_name' is invalid"),
    (0, express_validator_1.body)('last_name').isString().notEmpty().withMessage("first_name' is invalid"),
    (0, express_validator_1.body)('email').isEmail().notEmpty().withMessage("email is invaild"),
    (0, express_validator_1.body)('password').isString().notEmpty().isLength({ min: 6, max: 11 }).withMessage("password is invaild"),
    validate_1.validate
];
exports.LoginValidator = [
    (0, express_validator_1.body)('email').isEmail().notEmpty().withMessage("email is invaild"),
    (0, express_validator_1.body)('password').isString().notEmpty().isLength({ min: 6, max: 11 }).withMessage("password is invaild"),
    validate_1.validate
];
//# sourceMappingURL=user.validations.js.map