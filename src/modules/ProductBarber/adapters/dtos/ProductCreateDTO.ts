import { IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { IProduct } from "../../core/domain/IProduct";
import { IGroupProduct } from "../../../GroupProdut/core/domain/IGroupProduct";
import { Type } from "class-transformer";

class ProductCreateDTO implements IProduct { 
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()    
    barcode!: string;

    @IsString()
    @IsNotEmpty()
    quantity!: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Object) // adjust as necessary if you have a specific class for group
    group!: IGroupProduct[];

    @IsString()
    description!: string;

    @IsString()
    @IsNotEmpty()
    price!: string;

    @IsString() 
    @IsNotEmpty()
    ProfitPercentage!: string;

    @IsString()
    @IsNotEmpty()
    Supplier!: string;

    @IsString()
    urlImage!: string;
      
}

export default ProductCreateDTO;