import { IProduct } from "../../../ProductBarber/core/domain/IProduct";


export interface ISupplier {
    id?: string;
    cnpj: string;
    situacao: string;
    status: string;
    nome: string;
    fantasia: string;
    atividade: string    
    email: string;
    telefone: string;
    logradouro: string;
    numero: string;
    municipio: string;
    uf: string;
    cep: string;
    products: IProduct[];
    createdAt?: Date;
    updatedAt?: Date;
}