import { KitsRepository } from "../../domain/repository/kits.repository";


export class UpdateKitsUserId {
    constructor(readonly kitsRepository: KitsRepository) {}


    async run(kit_id: string, user_id: string) {

        try {
            
            const updateKitsUserId = await this.kitsRepository.updateKistUserId(kit_id, user_id);

            if (updateKitsUserId) {
                return `Kits updated successfully`
            } else {
                return `Failed to update kits ${kit_id}`
            }
        } catch (error) {
            return null;
        }
    }
}