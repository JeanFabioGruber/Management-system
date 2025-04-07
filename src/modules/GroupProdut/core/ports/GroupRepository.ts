import { IGroupProduct } from "../domain/IGroupProduct";


export interface GroupRepositoryPort {
    findAll(): Promise<IGroupProduct[]>;
    findById(id: string): Promise<IGroupProduct | null>; 
    create(group: IGroupProduct): Promise<IGroupProduct>;   
    update(id: string, group: IGroupProduct): Promise<IGroupProduct>;
    delete(id: string): Promise<void>;    
}