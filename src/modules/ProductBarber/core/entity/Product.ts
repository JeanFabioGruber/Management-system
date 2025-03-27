import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IProduct } from "../domain/IProduct";


@Entity()
export class Product implements IProduct{
    @PrimaryGeneratedColumn()
    id: string;      
    @Column()
    barcode: string;
    @Column()
    name: string;
    @Column()
    quantity: number;
    @Column()
    group: string;
    @Column()
    description: string;
    @Column()
    price: number;
    @Column()
    ProfitPercentage: number;
    @Column()
    Supplier: string;
    @Column()
    urlImage: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;

    constructor(){
        this.id = '';
        this.barcode = '';
        this.name = '';
        this.quantity = 0;
        this.group = '';
        this.description = '';
        this.price = 0;
        this.ProfitPercentage = 0;
        this.Supplier = '';
        this.urlImage = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};