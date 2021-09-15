import { AuthService } from './shared/auth.service';
import { LocalAuthGuard } from './shared/local-auth.guard';

import { Controller, UseGuards, Post, Request } from '@nestjs/common';


@Controller()
export class AuthController {

    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req: any) {
        return this.authService.login(req.user);
    }

}
