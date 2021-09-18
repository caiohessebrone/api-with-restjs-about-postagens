import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema({
    nome: { 
        type: String, 
        required: true,
    },
    email: { 
        type: String, 
        required: true,
        index: {
            unique: true,
        }
    },
    senha: { 
        type: String, 
        required: true,
    },
    dtCadastro: {
        type: Date,
        default: Date.now
    },
    dataNascimento: {
        type: Date,
        required: true,
    },
    sexo: {
        type: String,
        enum: ["M","F","O"],
        required: true,
    }
})