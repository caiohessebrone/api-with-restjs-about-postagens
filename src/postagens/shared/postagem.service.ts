import { Injectable } from '@nestjs/common';
import { create } from 'domain';
import { Postagem } from './postagem';

@Injectable()
export class PostagemService {

    postagens: Postagem[] = [
        {id: 1, titulo: "teste1", texto: "ola mundo 1", autor: "caio", nota: 4},
        {id: 2, titulo: "teste2", texto: "ola mundo 2", autor: "gaby", nota: 3},
        {id: 3, titulo: "teste3", texto: "ola mundo 3", autor: "tessio", nota: 5}
    ]
    getAll() {
        return this.postagens;
    }

    getById(id: number) {
        return this.postagens.find(item => item.id == id);
    }

    create(postagem: Postagem): Postagem {
        let lastId = 0;
        if(this.postagens.length > 0) {
            lastId = this.postagens[this.postagens.length -1].id;
        }
        postagem.id = lastId + 1;
        this.postagens.push(postagem);

        return postagem;
    }

    update(postagem: Postagem): Postagem {
        const postagemArray = this.getById(postagem.id);
        if(postagemArray) {

            postagemArray.titulo = postagem.titulo;
            postagemArray.texto = postagem.texto;
            postagemArray.autor = postagem.autor;
            postagemArray.nota = postagem.nota;

        }

        return postagemArray;

    }

    deletar(id: number) {
        const index = this.postagens.findIndex(value => value.id == id);
        this.postagens.splice(index, 1);
    }
}
