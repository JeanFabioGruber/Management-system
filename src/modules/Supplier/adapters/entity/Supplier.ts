import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ISupplier } from "../../core/domain/ISupplier";
import { IProduct } from "../../../ProductBarber/core/domain/IProduct";
import { Product } from "../../../ProductBarber/adapters/entity/Product";


@Entity()
export class Supplier implements ISupplier {
    @PrimaryGeneratedColumn()
    id!: string;
    @Column()
    cnpj: string;
    @Column()
    situacao: string;
    @Column()
    status: string;
    @Column()
    nome: string;
    @Column()
    fantasia: string;
    @Column()
    atividade: string;    
    @Column()
    email: string;
    @Column()
    telefone: string;
    @Column()
    logradouro: string;
    @Column()
    numero: string;
    @Column()
    municipio: string;
    @Column()
    uf: string;
    @Column()
    cep: string;
    @ManyToMany(() => Product, (product) => product.Supplier) 
    @JoinTable()    
    products!: IProduct[]; 
    createdAt: Date;
    updatedAt: Date;

    constructor() {
        this.cnpj = '';
        this.situacao = '';
        this.status = '';
        this.nome = '';
        this.fantasia = '';  
        this.atividade = '';      
        this.email = '';
        this.telefone = '';
        this.logradouro = '';
        this.numero = '';
        this.municipio = '';
        this.uf = '';
        this.cep = '';            
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}