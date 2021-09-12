import { Module } from '@nestjs/common';
import { PostagensController } from './postagens.controller';
import { PostagemService } from './shared/postagem.service';

@Module({
    controllers: [
        PostagensController,
    ],
    providers: [
        PostagemService,
    ]
})
export class PostagensModule {}
