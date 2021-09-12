import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Postagem } from './shared/postagem';
import { PostagemService } from './shared/postagem.service';

@Controller('postagens')
export class PostagensController {

    constructor(private postagemService: PostagemService) {}

    @Get()
    async getAll(): Promise<Postagem[]> {
        return this.postagemService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Postagem> {
        return this.postagemService.getById(id);
    }

    @Post()
    async create(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.create(postagem);
    }

    @Put(':id')
    async atualizar(
            @Param('id') id: number, 
            @Body() postagem: Postagem): Promise<Postagem> {
        postagem.id = id;
        return this.postagemService.update(postagem);
    }

    @Delete(':id')
    deletar(@Param('id') id: number ) {
        this.postagemService.deletar(id);
    }

}
