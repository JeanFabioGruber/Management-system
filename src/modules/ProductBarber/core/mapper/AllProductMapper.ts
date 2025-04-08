import { IProduct } from "../domain/IProduct";
import { Product } from "../../adapters/entity/Product";
import { url } from "inspector";
import { AllGroupProductMapper } from "../../../GroupProdut/core/mapper/AllGroupProductMapper";
import { AllSupplierMapper } from "../../../Supplier/core/mapper/AllSupplierMapper";

export const AllProductMapper = (products: IProduct) => {
    return {  
        barcode: products.barcode,      
        name: products.name,
        quantity: products.quantity,
        group: products.group.map(AllGroupProductMapper),
        description: products.description,
        price: products.price,
        url: products.urlImage,
        ProfitPercentage: products.ProfitPercentage,
        Supplier: products.Supplier.map(AllSupplierMapper),        
    };    
}