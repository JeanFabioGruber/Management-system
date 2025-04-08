import { Request, Response } from "express";
import { SupplierService } from "../../../core/services/supplierService";
import { AllSupplierMapper } from "../../../core/mapper/AllSupplierMapper";



export class SupplierController {
    constructor(
        private readonly supplierService: SupplierService
    ) { }

    async findAll(req: Request, res: Response) {
        try {
            const suppliers = await this.supplierService.findAll();
            return res.json(suppliers.map(AllSupplierMapper));
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
            const supplier = await this.supplierService.findById(id);
            if (!supplier) {
                return res.status(404).json({ message: 'Supplier not found' });
            }
            return res.json(supplier);
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async create(req: Request, res: Response) {
        const supplier = req.body;
        try {
            const createdSupplier = await this.supplierService.create(supplier);
            return res.status(201).json(createdSupplier);
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const supplier = req.body;
        try {
            if (!id) {
                return res.status(400).json({ message: 'Id is required' });
            }
            const updatedSupplier = await this.supplierService.update(id, supplier);
            if (!updatedSupplier) {
                return res.status(404).json({ message: 'Supplier not found' });
            }
            return res.json(updatedSupplier);
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
            const supplier = await this.supplierService.findById(id);
            if (!supplier) {
                return res.status(404).json({ message: 'Supplier not found' });
            }
            await this.supplierService.delete(id);
            return res.status(204).send();
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async createWithcnpj(req: Request, res: Response) {
        const { cnpj } = req.body;
        try {
            if (!cnpj) {
                return res.status(400).json({ message: 'CNPJ is required' });
            }
            const createdSupplier = await this.supplierService.createWithcnpj(cnpj);
            return res.status(201).json(createdSupplier);
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

}