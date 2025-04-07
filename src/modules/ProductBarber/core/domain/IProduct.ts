import { IGroupProduct } from "../../../GroupProdut/core/domain/IGroupProduct";


export interface IProduct {
    id?: string;
    barcode: string;
    name: string;
    quantity: string;
    group: IGroupProduct[];
    description: string;
    price: string;
    ProfitPercentage: string;
    Supplier: string;
    urlImage: string;
    createdAt?: Date;
    updatedAt?: Date;
}