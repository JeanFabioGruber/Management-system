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

    async create(product: IProduct): Promise<IProduct> {
        return this.productRepository.create(product);
    }

    async update(id: number, product: IProduct): Promise<IProduct> {
        return this.productRepository.update(id, product);
    }

    async delete(id: string): Promise<void> {
        return this.productRepository.delete(id);
    }

    async findByBarcode(barcode: string): Promise<IProduct | null> {
        return this.productRepository.findByBarcode(barcode);
    }
}