import { IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { IProduct } from "../../core/domain/IProduct";
import { IGroupProduct } from "../../../GroupProdut/core/domain/IGroupProduct";
import { Type } from "class-transformer";
import { ISupplier } from "../../../Supplier/core/domain/ISupplier";

class ProductCreateDTO { 
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()    
    barcode!: string;

    @IsString()
    @IsNotEmpty()
    quantity!: string;    

    @IsString()
    description!: string;

    @IsString()
    @IsNotEmpty()
    price!: string;

    @IsString() 
    @IsNotEmpty()
    ProfitPercentage!: string;    

    @IsString()
    urlImage!: string;
      
}

export default ProductCreateDTO;