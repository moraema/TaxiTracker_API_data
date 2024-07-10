import { KitsRepository } from '../../domain/repository/kits.repository';

export class GetAllKits {
    constructor(readonly kitsrepository: KitsRepository) {}

    async run() {
        try {
            const kits = await this.kitsrepository.getAllKits();

            if (kits?.length == 0) {
                throw new Error("There's no kits")
            }
            return kits;
        } catch(error) {
            return null;
        }
    }
}