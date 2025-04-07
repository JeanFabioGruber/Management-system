import { Product } from "../../../ProductBarber/adapters/entity/Product";


export interface IGroupProduct {
    id?: string;
    name: string;
    description: string;
    products?: Product[];
    createdAt?: Date;
    updatedAt?: Date;
}
    