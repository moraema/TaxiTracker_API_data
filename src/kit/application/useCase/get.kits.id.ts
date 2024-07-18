import { KitsRepository } from "../../domain/repository/kits.repository";


export class GetKitsId {
    constructor(readonly kitsRepository : KitsRepository) {}

    async run(kit_id: string) {

        try {

            const kits = await this.kitsRepository.getKitsId(kit_id);

             return kits         
        } catch (error) {
            return null
        }
    }
}