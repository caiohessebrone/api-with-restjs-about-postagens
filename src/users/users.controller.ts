<<<<<<< HEAD
import { Controller, Get } from "@nestjs/common";
import { UserService } from "./shared/user.service";

@Controller('/user')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    async getAll(){
        return this.userService.getAll();
    }
=======
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./shared/user.service";
import { Users } from "./shared/users";

@Controller('/user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    async getAll() {
        return this.userService.getAll();
    }

    @Post()
    async create(@Body() user: Users): Promise<Users> {
        return this.userService.create(user);
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Users> {
        return this.userService.getById(id)
    }

    @Put(':id')
    async atualizar(
            @Param('id') id: string,
            @Body() user: Users): Promise<Users> {
        user.id = id;
        return this.userService.update(id, user);
        }

    @Delete(':id')
    deletar(@Param('id') id: string) {
        this.userService.deletar(id);
    }
>>>>>>> c4459d7586c8321f8558fceea788407580c0ab90
}