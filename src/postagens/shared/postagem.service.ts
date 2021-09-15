import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Postagem } from './postagem';

@Injectable()
export class PostagemService {

    constructor(@InjectModel('Postagem') private readonly postagemModel: Model<Postagem>) {}


    async getAll() {
        return await this.postagemModel.find({}, '-_id -__v').exec();
    }

    async getById(id: string) {
        return await this.postagemModel.findById({ _id: id }, '-_id -__v').exec();
    }

    async getByAutor(autor: string) {
        return await this.postagemModel.find({ autor }, '-_id -__v').exec();
    }

    async create(postagem: Postagem) {
        const createPostagem = new this.postagemModel(postagem);
        return await createPostagem.save();
    }

    async update(id: string, postagem: Postagem) {
        await this.postagemModel.updateOne({ _id: id }, postagem).exec();
        return this.getById(id);
    }

    async deletar(id: string) { 
        return await this.postagemModel.deleteOne({ _id: id }).exec();
    }
}
