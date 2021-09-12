import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostagensController } from './postagens/postagens.controller';
import { PostagemService } from './postagens/shared/postagem.service';
import { PostagensModule } from './postagens/postagens.module';

@Module({
  imports: [PostagensModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
