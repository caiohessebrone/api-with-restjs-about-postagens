import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostagensController } from './postagens.controller';
import { PostagensSchema } from './schemas/postagens.schema';
import { PostagemService } from './shared/postagem.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: 'Postagem', schema: PostagensSchema}
        ])
    ],
    controllers: [
        PostagensController,
    ],
    providers: [
        PostagemService,
    ]
})
export class PostagensModule {}
