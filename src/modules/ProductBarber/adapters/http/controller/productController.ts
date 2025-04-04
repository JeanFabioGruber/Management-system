import { Request, Response } from "express";
import { ProductService } from "../../../core/services/productService";
import { IProduct } from "../../../core/domain/IProduct";
import { errorHandler } from "../../middleware/error/error";
import { AllProductMapper } from "../../../core/mapper/AllProductMapper";
import { deleteBlob, downloadBlob, uploadBlob } from "../../../../../adapters/azure/services/blobService";


export class ProductController {

    constructor(
        private readonly productService: ProductService
    ) { }

    async findAll(req: Request, res: Response) {
        try {
            const products = await this.productService.findAll();            
            return res.json(products.map(AllProductMapper));
        } catch (error) { 
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async findById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            if (!id) {
                return res.status(400).json({ message: 'Id is required' });
            }
            const product = await this.productService.findById(id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }          
            return res.json(product);
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async findImage(req: Request, res: Response) {
        const { id } = req.params;
        try {
            if (!id) {
                return res.status(400).json({ message: 'Id is required' });
            }
            const product = await this.productService.findById(id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            } 
            const imageBuffer = await downloadBlob(product.urlImage);            
            res.set('Content-Type', 'image/jpeg'); // Defina o tipo de conteúdo correto
            res.send(imageBuffer);            
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async create(req: Request, res: Response) {        
        const product: IProduct = req.body;
        try { 
            if (!req.file) {
                res.status(400).send("Nenhum arquivo enviado.");
                return;
            }
            const file = req.file;
            const blobUrl = await uploadBlob(file.originalname, file.buffer);    
            if (!blobUrl) {
                res.status(500).send("Erro ao fazer upload do arquivo.");
                return;
            } 
            product.urlImage = blobUrl;                
            const newProduct = await this.productService.create(product);
            return res.json(newProduct);
        } catch (error) {               
            return errorHandler(error, res);
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const product: IProduct = req.body;
        try {
            if (!id) {
                return res.status(400).json({ message: 'Id is required' });
            }
            const existingProduct = await this.productService.findById(id);
            if (!existingProduct) {
                return res.status(404).json({ message: 'Product not found' });
            }
            const updatedProduct = await this.productService.update(Number(id), product);
            return res.json(updatedProduct);
        } catch (error) {
            console.error('Error updating product:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            if (!id) {
                console.log('Id is required');
                return res.status(500).json({ message: 'Internal server error' });
            }
            const product = await this.productService.findById(id);
            
            if (!product) {
                console.log('Product not found');
                return res.status(500).json({ message: 'Internal server error' });
            }            
            await deleteBlob(product.urlImage);           
            await this.productService.delete(id);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async findByBarcode(req: Request, res: Response) {
        const { barcode } = req.params;

        try {
            if (!barcode) {
                return res.status(400).json({ message: 'Barcode is required' });
            }
            const product = await this.productService.findByBarcode(barcode);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }      
            console.log("product", product);      
            return res.json(product);
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

}