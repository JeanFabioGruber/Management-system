

export interface IProduct {
    id?: string;
    barcode: string;
    name: string;
    quantity: number;
    group: string;
    description: string;
    price: number;
    ProfitPercentage: number;
    Supplier: string;
    urlImage: string;
    createdAt?: Date;
    updatedAt?: Date;
}