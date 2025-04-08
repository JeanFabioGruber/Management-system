import { IGroupProduct } from "../../../GroupProdut/core/domain/IGroupProduct";
import { ISupplier } from "../../../Supplier/core/domain/ISupplier";


export interface IProduct {
    id?: string;
    barcode: string;
    name: string;
    quantity: string;
    group: IGroupProduct[];
    description: string;
    price: string;
    ProfitPercentage: string;
    Supplier: ISupplier[];
    urlImage: string;
    createdAt?: Date;
    updatedAt?: Date;
}