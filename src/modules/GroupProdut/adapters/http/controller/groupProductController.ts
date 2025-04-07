import { Request, Response } from "express";
import { IGroupProduct } from "../../../core/domain/IGroupProduct";
import { AllGroupProductMapper } from "../../../core/mapper/AllGroupProductMapper";



export class GroupProductController {
    
        constructor(
            private readonly groupProductService: any // Substitua pelo tipo correto do serviço
        ) { }
    
        async findAll(req: Request, res: Response) {
            try {
                const groupProducts = await this.groupProductService.findAll();            
                return res.json(groupProducts.map(AllGroupProductMapper));
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
                const groupProduct = await this.groupProductService.findById(id);
                if (!groupProduct) {
                    return res.status(404).json({ message: 'GroupProduct not found' });
                }          
                return res.json(groupProduct);
            } catch (error) {
                return res.status(500).json({ message: 'Internal server error' });
            }
        }

        async create(req: Request, res: Response) {        
            const groupProduct: IGroupProduct = req.body;
            try { 
                const createdGroupProduct = await this.groupProductService.create(groupProduct);            
                return res.status(201).json(createdGroupProduct);
            } catch (error) {
                return res.status(500).json({ message: 'Internal server error' });
            }
        }

        async update(req: Request, res: Response) {
            const { id } = req.params;
            const groupProduct: IGroupProduct = req.body;
            try {
                if (!id) {
                    return res.status(400).json({ message: 'Id is required' });
                }
                const updatedGroupProduct = await this.groupProductService.update(id, groupProduct);
                if (!updatedGroupProduct) {
                    return res.status(404).json({ message: 'GroupProduct not found' });
                }            
                return res.json(updatedGroupProduct);
            } catch (error) {
                return res.status(500).json({ message: 'Internal server error' });
            }
        }

        async delete(req: Request, res: Response) {
            const { id } = req.params;
            try {
                if (!id) {
                    return res.status(400).json({ message: 'Id is required' });
                }
                const deletedGroupProduct = await this.groupProductService.delete(id);
                if (!deletedGroupProduct) {
                    return res.status(404).json({ message: 'GroupProduct not found' });
                }            
                return res.json({ message: 'GroupProduct deleted successfully' });
            } catch (error) {
                return res.status(500).json({ message: 'Internal server error' });
            }
        }


    }