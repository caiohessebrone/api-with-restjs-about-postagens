import { Controller, Get } from "@nestjs/common";
import { UserService } from "./shared/user.service";

@Controller('/user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    async getAll() {
        return this.userService.getAll();
    }
}