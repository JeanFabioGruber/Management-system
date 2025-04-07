import { IGroupProduct } from "../domain/IGroupProduct";
import { GroupRepositoryPort } from "../ports/GroupRepository";



export class GroupProductService {
    constructor(
        private groupProductRepository: GroupRepositoryPort
    ) { }

    async findAll(): Promise<IGroupProduct[]> {
        return this.groupProductRepository.findAll();
    }

    async findById(id: string): Promise<IGroupProduct | null> {
        return this.groupProductRepository.findById(id);
    }

    async create(group: IGroupProduct): Promise<any> {
        return this.groupProductRepository.create(group);
    }

    async update(id: string, group: IGroupProduct): Promise<IGroupProduct> {
        return this.groupProductRepository.update(id, group);
    }

    async delete(id: string): Promise<void> {
        return this.groupProductRepository.delete(id);
    }
}