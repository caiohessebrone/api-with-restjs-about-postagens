import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema({
    nome: { 
        type: String, 
        required: true,
    },
    email: { 
        type: String, 
        required: true,
    },
    senha: { 
        type: String, 
        required: true,
    }
})