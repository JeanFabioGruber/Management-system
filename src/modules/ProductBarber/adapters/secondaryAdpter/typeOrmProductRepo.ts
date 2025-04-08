import { Product } from "../entity/Product";
import { ProductRepositoyPort } from "../../core/ports/ProductRepositoyPort";
import { AppDataSource } from "../../../../adapters/dataSource/data-source";
import { plainToClass } from "class-transformer";
import ProductCreateDTO from "../dtos/ProductCreateDTO";
import { validate } from "class-validator";
import ProductUpdateDTO from "../dtos/ProductUpdateDTO";
import { GroupProduct } from "../../../GroupProdut/adapters/entity/GroupProduct";
import { Supplier } from "../../../Supplier/adapters/entity/Supplier";

export class typeormProductRepo implements ProductRepositoyPort {  
    private productRepository = AppDataSource.getRepository(Product);
    private groupRepository = AppDataSource.getRepository(GroupProduct);
    private supplierRepository = AppDataSource.getRepository(Supplier);
    

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
    
    async create(product: Product, idGroupProductNumber: string, idSupplier: string): Promise<Product> {
        
        const productExist = await this.productRepository.findOneBy({ barcode: product.barcode });
        if (productExist) {
            throw new Error('Product already exists');
        }
        const supplierExist = await this.supplierRepository.findOneBy({ id: idSupplier });   
        if (!supplierExist) {
            throw new Error('Supplier not found');
        }    
        product.Supplier = [{ ...supplierExist, products: [] }];
        const groupExist = await this.groupRepository.findOneBy({ id: idGroupProductNumber });
        console.log(groupExist);          
        
        if (!groupExist) {
            throw new Error('Group not found');
        }  
        product.group = [{ ...groupExist, products: [] }];
        const productDto = plainToClass(ProductCreateDTO, product);
        const errors = await validate(productDto);
        if (errors.length > 0) {
            throw errors;
        }         
        return this.productRepository.save(product);        
    }

    async update(barcode: string, product: Product): Promise<Product> {
        const productExist = await this.productRepository.findOneBy({ barcode });
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

    async findByGroup(group: string): Promise<Product[] | null> {
        const products = await this.productRepository.findBy({ group: { id: group } });
        if (!products) {
            console.log("Product not found");      
        }
        return products;
    }

    async updateGroupProduct(barcode: string, idGroupProduct: string): Promise<Product> {
        const productExist = await this.productRepository.findOneBy({ barcode });
        console.log("productExist", productExist);
        if (!productExist) {
            throw new Error('Product not found');
        }        
        const groupExist = await this.groupRepository.findOneBy({ id: idGroupProduct });
        console.log("groupExist", groupExist);
        if (!groupExist) {
            throw new Error('Group not found');
        }  
        productExist.group = [{ ...groupExist, products: [] }];
        return this.productRepository.save(productExist);        
    }
}