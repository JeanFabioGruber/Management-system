import { ISupplier } from "../domain/ISupplier";


export interface SupplierRepositoyPort {
    findAll(): Promise<ISupplier[]>;
    findById(id: string): Promise<ISupplier | null>;
    create(supplier: ISupplier): Promise<ISupplier>;
    update(id: string, supplier: ISupplier): Promise<ISupplier>;
    delete(id: string): Promise<void>;
    createWithcnpj(cnpj: string): Promise<ISupplier>;
}