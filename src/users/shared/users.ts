import { Document } from 'mongoose';

export class Users extends Document {
    nome: string;
    email: string;
    senha: string;
    dataNascimento: Date;
    sexo: string;
    dtCadastro: Date;
}

