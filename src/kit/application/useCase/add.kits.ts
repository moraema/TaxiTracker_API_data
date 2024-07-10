import { Kits } from "../../domain/entity/kits";
import { KitsRepository } from "../../domain/repository/kits.repository";


export class AddKits {
    constructor(readonly kitsRepository: KitsRepository) {} 

    async run(kits: Kits) {

        try {
            const kitsAdd = await this.kitsRepository.addKits(kits);
            return kitsAdd;
        } catch (error) {
            return null;
        }
    }
}