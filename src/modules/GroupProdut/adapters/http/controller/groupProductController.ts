import { Request, Response } from "express";
import { IGroupProduct } from "../../../core/domain/IGroupProduct";
import { AllGroupProductMapper } from "../../../core/mapper/AllGroupProductMapper";
import { GroupProductService } from "../../../core/services/groupProductService";



export class GroupProductController {
    
        constructor(
            private readonly groupProductService: GroupProductService
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
                    console.log('Id is required');
                    return res.status(400).json({ message: 'Id is required' });
                }
                await this.groupProductService.delete(id);            
                return res.status(204).send();
            } catch (error) {
                if (error instanceof Error && error.message.includes('Não é possível excluir')) {
                    return res.status(409).json({ message: error.message });
                }
                return res.status(500).json({ message: 'Internal server error' });
            }
        }


    }