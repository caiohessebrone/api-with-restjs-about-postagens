import { jwtConstants } from './shared/constants';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './shared/local-strategy';
import { UserModule } from './../users/user.module';
import { AuthService } from './shared/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { JwtStrategy } from './shared/jwt.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '800s' },
        }),
    ],
    controllers: [
        AuthController,],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
})
export class AuthModule { }
