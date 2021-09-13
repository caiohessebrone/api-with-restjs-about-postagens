import { Document } from "mongoose";


export class Postagem extends Document {
    
    titulo: string;
    texto: string;
    photoPerfilUrl: string;
    autor: string;
    nota: number;
    date: Date;
    
}
