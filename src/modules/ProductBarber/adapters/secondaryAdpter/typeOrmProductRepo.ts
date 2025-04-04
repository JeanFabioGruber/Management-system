import { Product } from "../entity/Product";
import { ProductRepositoyPort } from "../../core/ports/ProductRepositoyPort";
import { AppDataSource } from "../../../../adapters/dataSource/data-source"
import e = require("express");
import { plainToClass } from "class-transformer";
import ProductCreateDTO from "../dtos/ProductCreateDTO";
import { validate } from "class-validator";
import ProductUpdateDTO from "../dtos/ProductUpdateDTO";



export class typeormProductRepo implements ProductRepositoyPort {  
    private productRepository = AppDataSource.getRepository(Product);
    

    async findAll(): Promise<Product[]> {
        return this.productRepository.find();        
    }

    async findById(id: string): Promise<Product | null> {
        const product = await this.productRepository.findOneBy({ id });
        if (!product) {
            console.log("Product not found");      
        }
        return product;
    }
    
    async create(product: Product): Promise<Product> {
        const productExist = await this.productRepository.findOneBy({ barcode: product.barcode });
        if (productExist) {
            throw new Error('Product already exists');
        }
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", product);
        const productDto = plainToClass(ProductCreateDTO, product);
        const errors = await validate(productDto);
        if (errors.length > 0) {
            throw errors;
        }         
        return this.productRepository.save(product);        
    }

    async update(id: number, product: Partial< Product>): Promise<Product> {
        const productExist = await this.productRepository.findOneBy({ id: id.toString() });
        if (!productExist) {
            throw new Error('Product not found');
        }        
        const productDto = plainToClass(ProductUpdateDTO, product);
        const errors = await validate(productDto);
        if (errors.length > 0) {
            throw errors;
        } 
        return this.productRepository.save({ ...productExist, ...product });        
    }

    async delete(id: string): Promise<void> {
        await this.productRepository.delete({ id });
    }

    async findByBarcode(barcode: string): Promise<Product | null> {
        const product = await this.productRepository.findOneBy({ barcode });
        if (!product) {
            console.log("Product not found");      
        }
        return product;
    }
   

}