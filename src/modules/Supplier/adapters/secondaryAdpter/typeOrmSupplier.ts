import axios from "axios";
import { AppDataSource } from "../../../../adapters/dataSource/data-source";
import { SupplierRepositoyPort } from "../../core/ports/SupplierRepositoryPorts";
import { Supplier } from "../entity/Supplier";
import { ISupplier } from "../../core/domain/ISupplier";

export class typeormSupplierRepo implements SupplierRepositoyPort {
    private supplierRepository = AppDataSource.getRepository(Supplier);
    async findAll(): Promise<Supplier[]> {
        const suppliers = await this.supplierRepository.find();
        if (!suppliers) {
            console.log("No suppliers found");
        }
        console.log("Suppliers found", suppliers);
        return suppliers;
    }

    async findOneBy(supplier: Supplier): Promise<Supplier | null> {
        console.log("Finding supplier by one", supplier);
        const supplierFound = await this.supplierRepository.findOneBy(supplier);
        if (!supplierFound) {
            console.log("Supplier not found");
        }
        return supplierFound;
    }
    async findById(id: string): Promise<Supplier | null> {
        console.log("Finding supplier by id", id);
        const supplier = await this.supplierRepository.findOneBy({ id });
        if (!supplier) {
            console.log("Supplier not found");
        }
        return supplier;
    }
    async create(supplier: Supplier): Promise<Supplier> {
        const supplierExist = await this.supplierRepository.findOneBy({ id: supplier.id });
        if (supplierExist) {
            throw new Error('Supplier already exists');
        }
        return this.supplierRepository.save(supplier);
    }
    async update(id: string, supplier: Supplier): Promise<Supplier> {
        const supplierExist = await this.supplierRepository.findOneBy({ id });
        if (!supplierExist) {
            throw new Error('Supplier not found');
        }
        return this.supplierRepository.save({ ...supplierExist, ...supplier });
    }
    async delete(id: string): Promise<void> {
        const supplierExist = await this.supplierRepository.findOneBy({ id });
        if (!supplierExist) {
            throw new Error('Supplier not found');
        }
        await this.supplierRepository.delete(id);
    }

    async createWithcnpj(cnpj: string): Promise<Supplier> {
        const supplierExist = await this.supplierRepository.findOneBy({ cnpj });
        if (supplierExist) {
            throw new Error('Supplier already exists');
        }
        // ultilizando o axios para buscar os dados do cnpj pelo www.receitaws.com.br/v1/cnpj/{cnpj}
        const response = await axios.get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
        if (response.data.status === 'ERROR') {
            throw new Error('CNPJ not found');
        }
        const { situacao, status, nome, fantasia, atividade_principal, email, telefone, logradouro, numero, municipio, uf, cep } = response.data;
        const atividade = atividade_principal[0].text;

        
        
        const supplierData = {
            cnpj,
            situacao,
            status,
            nome,
            fantasia,           
            atividade,
            email,
            telefone,
            logradouro,
            numero,
            municipio,
            uf,
            cep
        };

        console.log("Supplier data", supplierData);
        
        const supplier = this.supplierRepository.create(supplierData);        
        return this.supplierRepository.save(supplier);
    }

    async findbyName(name: string): Promise<ISupplier | null> {
        const supplier = await this.supplierRepository.findOneBy({ nome: name });
        if (!supplier) {
            console.log("Supplier not found");
            return null;
        }
        return supplier;
    }
}