import { Route } from './routes.types';
import UserRouter from '../modules/user/user.route'

export const router: Route[] = [
    new Route('/user', UserRouter),
];


