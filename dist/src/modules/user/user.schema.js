"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class UserSchema extends mongoose_1.Schema {
    constructor() {
        super({
            first_name: {
                type: String,
                required: true
            },
            last_name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true,
                unique: true
            },
            password: {
                type: String,
                required: true
            }
        });
    }
}
const UserModel = (0, mongoose_1.model)('User', new UserSchema());
exports.default = UserModel;
//# sourceMappingURL=user.schema.js.map