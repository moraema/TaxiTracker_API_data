import { Stars } from "../../domain/entity/stars";
import { StarsRepository } from "../../domain/repositpry/stars.repository";

export class AddStars {
    constructor ( readonly starsRepository: StarsRepository){}

    async run(start: Stars) {
        try {
            const startAdd = await this.starsRepository.addStars(start);
            return startAdd;
        } catch ( error) {
            return null;
        }
    }
} 