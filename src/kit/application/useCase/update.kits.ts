import { KitsRepository } from "../../domain/repository/kits.repository";


export class UpdateKits {
    constructor(readonly kitsRepository: KitsRepository) {}

    async run(kit_id: string, unit_code: string, name: string) {
     
        try {

            const updateKits = await this.kitsRepository.updateKits(kit_id, unit_code, name);

         if (updateKits) {
            return 'Driver updated successfully';
          } else {
            return `Failed to update driver ${kit_id}`;
           }   
        } catch (error) {
            return null;
        }
    }
}