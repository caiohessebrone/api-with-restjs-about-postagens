import { Injectable } from "@nestjs/common";


//sera injetado dentro de outras classes
@Injectable()
export class UserService {
    getAll(){ 
        return "Olá Usuarios"
    }

}