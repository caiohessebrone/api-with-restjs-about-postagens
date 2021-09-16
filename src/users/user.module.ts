import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { UserService } from "./shared/user.service";

import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./schemas/users.schema";


@Module({
    imports: [
        MongooseModule.forFeature([{ name: "Users", schema: UserSchema}]),
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}