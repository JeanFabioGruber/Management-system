import { IsOptional, IsString, IsNotEmpty } from "class-validator";
import { IProduct } from "../../core/domain/IProduct";
import { IGroupProduct } from "../../../GroupProdut/core/domain/IGroupProduct";
import { ISupplier } from "../../../Supplier/core/domain/ISupplier";

class ProductUpdateDTO implements Partial<IProduct> { 
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    barcode?: string;

    @IsString()
    @IsOptional()
    quantity?: string;

    @IsString()
    @IsOptional()
    group?: IGroupProduct[];

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    price?: string;

    @IsString()
    @IsOptional()
    ProfitPercentage?: string;

    @IsString()
    @IsOptional()
    Supplier?: ISupplier[];

    @IsString()
    @IsOptional()
    urlImage?: string;
}

export default ProductUpdateDTO;
