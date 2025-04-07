import { AppDataSource } from "../../../../adapters/dataSource/data-source";
import { GroupRepositoryPort } from "../../core/ports/GroupRepository";
import { GroupProduct } from "../entity/GroupProduct";


export class TypeOrmGroupProductRepo implements GroupRepositoryPort {
    private groupProductRepository = AppDataSource.getRepository(GroupProduct);

    async findAll(): Promise<GroupProduct[]> {
        return this.groupProductRepository.find();
    }

    async findById(id: string): Promise<GroupProduct | null> {
        console.log("id", id);
        const groupProduct = await this.groupProductRepository.findOneBy({ id });
        if (!groupProduct) {
            console.log("GroupProduct not found");
        }
        return groupProduct;
    }

    async create(groupProduct: GroupProduct): Promise<GroupProduct> {
        const groupProductExist = await this.groupProductRepository.findOneBy({ name: groupProduct.name });
        if (groupProductExist) {
            throw new Error('GroupProduct already exists');
        }
        return this.groupProductRepository.save(groupProduct);
    }

    async update(id: string, groupProduct: Partial<GroupProduct>): Promise<GroupProduct> {
        const groupProductExist = await this.groupProductRepository.findOneBy({ id });
        if (!groupProductExist) {
            throw new Error('GroupProduct not found');
        }
        return this.groupProductRepository.save({ ...groupProductExist, ...groupProduct });
    }

    async delete(id: string): Promise<void> {
        
    }


    
}