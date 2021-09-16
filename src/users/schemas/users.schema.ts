import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema({
    nome: { 
        type: String, 
        required: true,
    },
    email: { 
        type: String, 
        required: true,
        unique: true,
    },
    senha: { 
        type: String, 
        index: {
            required: true,
        }
    }
})