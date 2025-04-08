import { AllProductMapper } from "../../../ProductBarber/core/mapper/AllProductMapper";
import { ISupplier } from "../domain/ISupplier";


export const AllSupplierMapper = (supplier: ISupplier) => {
    return {  
        cnpj: supplier.cnpj,
        situacao: supplier.situacao,
        status: supplier.status,
        nome: supplier.nome,
        fantasia: supplier.fantasia,
        atividade: supplier.atividade,
        email: supplier.email,
        telefone: supplier.telefone,
        logradouro: supplier.logradouro,
        numero: supplier.numero,
        cidade: supplier.municipio,
        estado: supplier.uf,
        cep: supplier.cep,
        // createdAt: supplier.createdAt,
        // updatedAt: supplier.updatedAt,
        
        // products: supplier.products.map((product) => AllProductMapper(product)),            
    };
}