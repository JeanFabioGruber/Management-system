import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IProduct } from "../../core/domain/IProduct";

class ProductCreateDTO implements IProduct { 
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()    
    barcode!: string;

    @IsNumber()
    @IsNotEmpty()
    quantity!: number;

    @IsString()
    group!: string;

    @IsString()
    description!: string;

    @IsNumber()
    @IsNotEmpty()
    price!: number;

    @IsNumber()
    @IsNotEmpty()
    ProfitPercentage!: number;

    @IsString()
    @IsNotEmpty()
    Supplier!: string;

    @IsString()
    urlImage!: string;
      
}

export default ProductCreateDTO;