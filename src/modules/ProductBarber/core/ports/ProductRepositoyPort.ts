import { IProduct } from "../domain/IProduct";


export interface ProductRepositoyPort {
    findAll(): Promise<IProduct[]>;
    findById(id: string): Promise<IProduct | null>; 
    create(product: IProduct): Promise<IProduct>;   
    update(product: IProduct): Promise<IProduct>;
    delete(id: string): Promise<void>;    
}
    