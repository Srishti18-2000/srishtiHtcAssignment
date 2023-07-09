import { Request,Response,NextFunction,Router } from "express";
import userService from "./user.service";
import { CreateUserValidator, LoginValidator } from "./user.validations";


const router = Router();

router.post('/register',CreateUserValidator, async (req :Request, res:Response, next:NextFunction) => {
    try {
        const user = req.body;
        const result = await userService.register(user);
        res.send(result);
    } catch (e) {
        next(e);
    }
});

router.post('/login', LoginValidator,async (req :Request, res:Response, next:NextFunction) => {
    try {
        const credentials = req.body;
        const result = await userService.login(credentials);
        res.send(result);
    } catch (e) {
        next(e);
    }
});

export default router


