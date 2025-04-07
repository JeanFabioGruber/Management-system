import { IProduct } from "../domain/IProduct";
import { ProductRepositoyPort } from "../ports/ProductRepositoyPort";



export class ProductService {
    constructor(
        private productRepository: ProductRepositoyPort
    ) { }

    async findAll(): Promise<IProduct[]> {
        return this.productRepository.findAll();
    }

    async findById(id: string): Promise<IProduct | null> {
        return this.productRepository.findById(id);
    }

    async create(product: IProduct, idGroupProduct: string): Promise<IProduct> {
        return this.productRepository.create(product, idGroupProduct);
    }

    async update(barcode: string, product: IProduct): Promise<IProduct> {
        return this.productRepository.update(barcode, product);
    }

    async delete(id: string): Promise<void> {
        return this.productRepository.delete(id);
    }

    async findByBarcode(id: string): Promise<IProduct | null> {
        return this.productRepository.findByBarcode(id);
    }

    async findByGroup(group: string): Promise<IProduct[] | null> {
        return this.productRepository.findByGroup(group);
    }
}