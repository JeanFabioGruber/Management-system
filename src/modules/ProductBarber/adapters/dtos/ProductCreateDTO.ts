import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IProduct } from "../../core/domain/IProduct";

class ProductCreateDTO implements IProduct { 
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()    
    barcode!: string;

    @IsString()
    @IsNotEmpty()
    quantity!: string;

    @IsString()
    group!: string;

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