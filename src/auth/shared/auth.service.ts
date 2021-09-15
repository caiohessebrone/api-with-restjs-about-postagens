import { UserService } from './../../users/shared/user.service';
import { JwtService } from '@nestjs/jwt';
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService) {}

    async validateUser(userEmail: string, userSenha: string) {
        const user = await this.userService.getByEmail(userEmail);
        if(user && user.senha === userSenha) {
            const { _id, nome, email } = user;
            return { id: _id, nome, email };
        }
        return null;
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}
