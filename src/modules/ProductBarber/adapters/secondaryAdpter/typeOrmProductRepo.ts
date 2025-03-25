import { Product } from "../../core/entity/Product";
import { ProductRepositoyPort } from "../../core/ports/ProductRepositoyPort";
import { AppDataSource } from "../../../../adapters/dataSource/data-source"



export class typeormProductRepo implements ProductRepositoyPort {  
    private productRepository = AppDataSource.getRepository(Product);
    

    async findAll(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async findById(id: string): Promise<Product | null> {
        const product = await this.productRepository.findOneBy({ id });
        return product
    }
    
    async create(product: Product): Promise<Product> {        
        return this.productRepository.save(product);        
    }

    async update(product: Product): Promise<Product> {
        return this.productRepository.save(product);
    }

    async delete(id: string): Promise<void> {
        await this.productRepository.delete({ id });
    }
   

}