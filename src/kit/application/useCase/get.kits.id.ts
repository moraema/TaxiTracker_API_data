import { KitsRepository } from "../../domain/repository/kits.repository";


export class GetKitsId {
    constructor(readonly kitsRepository : KitsRepository) {}

    async run(kit_id: string) {

        try {

            const kits = await this.kitsRepository.getKitsId(kit_id);

           if (kits) {
             return kits
           }  else {
            return `There is no kit by id ${kit_id}`
           }
        } catch (error) {
            return null
        }
    }
}