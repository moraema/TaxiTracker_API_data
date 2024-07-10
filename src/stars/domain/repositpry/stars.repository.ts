import { Stars } from "../entity/stars";

export interface StarsRepository {
    addStars(start: Stars): Promise<Stars>;
    getByIdStars(starsId: string): Promise<Stars | null> // no tan necesario
}