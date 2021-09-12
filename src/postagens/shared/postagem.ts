import { Document } from "mongoose";


export class Postagem extends Document {
    
    titulo: string;
    texto: string;
    autor: string;
    nota: number;
    
}
