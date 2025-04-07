import { Column, CreateDateColumn, Entity, ManyToMany, JoinTable, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IProduct } from "../../core/domain/IProduct";
import { GroupProduct } from "../../../GroupProdut/adapters/entity/GroupProduct";

@Entity()
export class Product implements IProduct{
    @PrimaryGeneratedColumn()
    id: string;      
    @Column()
    barcode: string;
    @Column()
    name: string;
    @Column()
    quantity: string;    
    @Column()
    description: string;
    @Column()
    price: string;
    @Column()
    ProfitPercentage: string;
    @Column()
    Supplier: string;
    @Column()
    urlImage: string;    
    @ManyToMany(() => GroupProduct, (group) => group.products, { eager: true })
    @JoinTable()
    group!: GroupProduct[];    
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;

    constructor(){
        this.id = '';
        this.barcode = '';
        this.name = '';
        this.quantity = "0";      
        this.description = '';
        this.price = "0";
        this.ProfitPercentage = "0";
        this.Supplier = '';
        this.urlImage = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};