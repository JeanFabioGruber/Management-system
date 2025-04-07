import { IProduct } from "../domain/IProduct";


export interface ProductRepositoyPort {
    findAll(): Promise<IProduct[]>;
    findById(id: string): Promise<IProduct | null>; 
    create(product: IProduct, idGroupProduct: string): Promise<IProduct>;   
    update(barcode: string, product: IProduct): Promise<IProduct>;
    delete(id: string): Promise<void>;    
    findByBarcode(barcode: string): Promise<IProduct | null>;
    findByGroup(group: string): Promise<IProduct[] | null>;
}
    