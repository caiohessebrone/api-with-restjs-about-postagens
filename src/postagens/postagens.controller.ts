import { JwtAuthGuard } from './../auth/shared/jwt-auth.guard';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Postagem } from './shared/postagem';
import { PostagemService } from './shared/postagem.service';

@Controller('/postagens')
export class PostagensController {

    constructor(private postagemService: PostagemService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(): Promise<Postagem[]> {
        return this.postagemService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/autor/:name')
    async getByAutor(@Param('name') name: string): Promise<Postagem[]> {
        return this.postagemService.getByAutor(name);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string): Promise<Postagem> {
        return this.postagemService.getById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.create(postagem);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async atualizar(
            @Param('id') id: string, 
            @Body() postagem: Postagem): Promise<Postagem> {
        postagem.id = id;
        return this.postagemService.update(id, postagem);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deletar(@Param('id') id: string ) {
        this.postagemService.deletar(id);
    }

}
