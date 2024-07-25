import { KitsRepository } from '../../domain/repository/kits.repository';

export class GetKitsByUserId {
    constructor(readonly kitsrepository: KitsRepository) {}

    async run(user_id: string) {
        try {
            const kits = await this.kitsrepository.getKitsByUserId(user_id);

            return kits;
        } catch(error) {
            return null;
        }
    }
}