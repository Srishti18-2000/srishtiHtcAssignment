import { body } from "express-validator";
import { validate } from "../../utility/validate";


export const CreateUserValidator = [
    body('first_name').isString().notEmpty().withMessage("first_name' is invalid"),
    body('last_name').isString().notEmpty().withMessage("first_name' is invalid"),
    body('email').isEmail().notEmpty().withMessage("email is invaild"),
    body('password').isString().notEmpty().isLength({ min: 6, max: 11 }).withMessage("password is invaild"),
    validate
];

export const LoginValidator=[
    body('email').isEmail().notEmpty().withMessage("email is invaild"),
    body('password').isString().notEmpty().isLength({ min: 6, max: 11 }).withMessage("password is invaild"),
    validate
]
