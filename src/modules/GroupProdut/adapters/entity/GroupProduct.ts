import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToMany } from "typeorm";
import { IGroupProduct } from "../../core/domain/IGroupProduct";
import { Product } from "../../../ProductBarber/adapters/entity/Product";

@Entity()
export class GroupProduct implements IGroupProduct {
    @PrimaryGeneratedColumn()
    id: string;  
    @Column()    
    name: string;
    @Column()   
    description: string;
    
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;

    // Adicionado relacionamento inverso ManyToMany com Product
    @ManyToMany(() => Product, (product) => product.group)
    products!: Product[];

    constructor(){
        this.id = '';
        this.name = '';
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();       
    }
};