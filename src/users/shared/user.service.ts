import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users';
import * as bcrypt from 'bcrypt';

//sera injetado dentro de outras classes
@Injectable()
export class UserService {
    
    constructor(
        @InjectModel('Users') private readonly userModel: Model<Users>
    ) { }
    async getAll(){
        return await this.userModel.find().exec();
    }

    async create(user: Users) {
        const saltOrRounds = 10;
        const userEncryptSenha = {
            nome: user.nome,
            senha: await bcrypt.hash(user.senha, saltOrRounds),
            email: user.email,
        }
        const createUser = new this.userModel(userEncryptSenha);
        return await createUser.save();
    }
    async getById(id: string) {
        return await this.userModel.findById(id).exec();
    }

    async getByEmail(email: string) {
        return await this.userModel.findOne({ email }).exec();
    }

    async update(id: string, user: Users) {
        await this.userModel.updateOne({ _id: id }, user).exec()
        return this.getById(id);
    }

    async deletar(id: string) {
        return await this.userModel.deleteOne({ _id: id}).exec();
    }
}