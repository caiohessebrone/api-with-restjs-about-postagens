import { Injectable } from "@nestjs/common";
<<<<<<< HEAD

=======
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users';
>>>>>>> c4459d7586c8321f8558fceea788407580c0ab90

//sera injetado dentro de outras classes
@Injectable()
export class UserService {
<<<<<<< HEAD
    getAll(){ return "Olá Usuarios"}

=======
    
    constructor(
        @InjectModel('Users') private readonly userModel: Model<Users>
    ) { }
    async getAll(){
        return await this.userModel.find().exec();
    }
    async create(user: Users) {
        const createUser = new this.userModel(user);
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
>>>>>>> c4459d7586c8321f8558fceea788407580c0ab90
}