import { IProduct } from "../domain/IProduct";
import { Product } from "../../adapters/entity/Product";
import { url } from "inspector";



export const AllProductMapper = (products: IProduct) => {
    return {
        id: products.id,
        name: products.name,
        barcode: products.barcode,
        description: products.description,
        price: products.price,
        url: products.urlImage,
        createdAt: products.createdAt, 
        updatedAt: products.updatedAt,


        
    };    
}