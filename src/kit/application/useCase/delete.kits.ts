import { KitsRepository } from "../../domain/repository/kits.repository";

export class DeleteKits {
    constructor ( readonly kitsRepostitory: KitsRepository) {}

    async run(kits_id: string){
        try {
            const findKits = await this.kitsRepostitory.deleteByIdKits(kits_id);

            if (findKits) {
                await this.kitsRepostitory.deleteByIdKits(kits_id);
                return 'Kits deleted'
            } else {
                return `The kits to be removed were not found ${findKits}`;
            }
           } catch ( error ) {
            return null;
        }
    }
}