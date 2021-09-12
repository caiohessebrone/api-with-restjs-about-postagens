import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostagensController } from './postagens/postagens.controller';
import { PostagemService } from './postagens/shared/postagem.service';
import { PostagensModule } from './postagens/postagens.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://caiobrone:32655523a@cluster0.prye4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ),
    PostagensModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
