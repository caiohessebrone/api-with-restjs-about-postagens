import * as mongoose from 'mongoose';

export const PostagensSchema = new mongoose.Schema({
    titulo: String,
    texto: String,
    autor: String,
    nota: Number,
});