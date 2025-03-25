import { Request, Response } from "express";
import { ProductService } from "../../../core/services/productService";
import { IProduct } from "../../../core/domain/IProduct";


export class ProductController {

    constructor(
        private readonly productService: ProductService
    ) { }

    async findAll(req: Request, res: Response) {
        try {
            const products = await this.productService.findAll();
            return res.json(products);
        } catch (error) { 
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async findById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const product = await this.productService.findById(id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            return res.json(product);
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async create(req: Request, res: Response) {
        const product: IProduct = req.body;
        try {
            // console.log(product);
            const newProduct = await this.productService.create(product);

            return res.json(newProduct);
        } catch (error) {
            console.error("Error in ProductController.create:", error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async update(req: Request, res: Response) {
        const product: IProduct = req.body;
        try {
            const updatedProduct = await this.productService.update(product);
            return res.json(updatedProduct);
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await this.productService.delete(id);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}