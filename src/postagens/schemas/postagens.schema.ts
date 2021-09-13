import * as mongoose from 'mongoose';


export const PostagensSchema = new mongoose.Schema({
    titulo: { 
        type: String, 
        required: true,
    },
    texto: { 
        type: String, 
        required: true 
    },
    autor: { 
        type: String, 
        required: true 
    },
    nota: {
        type: Number,
        min: 1, 
        max: 10,
        required: true,
        description: "only values between [1 and 10]"
    },
    date: { 
        type: Date, 
        required: true, 
        default: Date.now 
    },
    photoPerfilUrl: { 
        type: String, 
        require: false 
    }
});