import { Graphics } from "../entity/graphics";


export interface GraphicsRepository {
    GetDailyRatingsByDriverAndDate(driver_id: string, date: string): Promise<Graphics | null>;
    GetTravelsByDriverDistance(driver_id: string): Promise<Graphics | null>;
}