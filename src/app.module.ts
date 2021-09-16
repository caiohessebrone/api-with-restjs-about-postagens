import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostagensModule } from './postagens/postagens.module';
import { UserModule } from './users/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://caiobrone:32655523a@cluster0.prye4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ),
    ConfigModule.forRoot({ isGlobal: true }),
    PostagensModule,
    UserModule
    ],

  controllers: [AppController],
  providers: [
    AppService],
})
export class AppModule { }
