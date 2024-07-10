import { StarsRepository } from "../../domain/repositpry/stars.repository";

export class GetStarsById {
    constructor( readonly starsRepository: StarsRepository ) {}

    async run(starsId: string) {

        try {
            const stars = await this.starsRepository.getByIdStars(starsId);

            if (!stars) {
                throw new Error (`Stars not found ${starsId}`)
            }

            return stars;
        } catch (error) {
            return null;
        }
    }
}