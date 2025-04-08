import { SupplierRepositoyPort } from "../ports/SupplierRepositoryPorts";


export class SupplierService {
    constructor(
        private supplierRepository: SupplierRepositoyPort 
    ) { }

    async findAll(): Promise<any[]> {
        return this.supplierRepository.findAll();
    }

    async findById(id: string): Promise<any | null> {
        return this.supplierRepository.findById(id);
    }

    async create(supplier: any): Promise<any> {
        return this.supplierRepository.create(supplier);
    }

    async update(id: string, supplier: any): Promise<any> {
        return this.supplierRepository.update(id, supplier);
    }

    async delete(id: string): Promise<void> {
        return this.supplierRepository.delete(id);
    }

    async createWithcnpj(cnpj: string): Promise<any> {
        return this.supplierRepository.createWithcnpj(cnpj);
    }
}