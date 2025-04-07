import { group } from "console";
import { IGroupProduct } from "../domain/IGroupProduct";

export const AllGroupProductMapper = (groupProduct: IGroupProduct) => {
    return {  
        // id: groupProduct.id,      
        name: groupProduct.name,
        description: groupProduct.description,        
        // createdAt: groupProduct.createdAt,
        // updatedAt: groupProduct.updatedAt,        
    };    
}