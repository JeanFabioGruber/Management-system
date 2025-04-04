import { IsOptional, IsString, IsNotEmpty } from "class-validator";
import { IProduct } from "../../core/domain/IProduct";

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
    group?: string;

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
    Supplier?: string;

    @IsString()
    @IsOptional()
    urlImage?: string;
}

export default ProductUpdateDTO;
