// nest imports
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

// 3º part import
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

// properties imports
import { Users } from './users';

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
        const target = await this.userModel.findById(id).exec();
        if(!target) {
            throw new HttpException(
                `O ID: ${id} não existe`,
                HttpStatus.NOT_FOUND,
            );
        }
        return target;
    }

    async getByEmail(email: string) {
        const target = await this.userModel.findOne({ email }).exec();
        if(!target) {
            throw new HttpException(
                `O e-mail: ${email} não está cadastrado`,
                HttpStatus.NOT_FOUND,
            )
        }
        return target;
    }

    async update(id: string, user: Users) {
        await this.userModel.updateOne({ _id: id }, user).exec()
        return this.getById(id);
    }

    async deletar(id: string) {
        return await this.userModel.deleteOne({ _id: id}).exec();
    }
}