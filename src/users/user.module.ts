import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { UserService } from "./shared/user.service";
<<<<<<< HEAD


@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService]
=======
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./schemas/users.schema";


@Module({
    imports: [
        MongooseModule.forFeature([{ name: "Users", schema: UserSchema}]),
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
>>>>>>> c4459d7586c8321f8558fceea788407580c0ab90
})
export class UserModule {}