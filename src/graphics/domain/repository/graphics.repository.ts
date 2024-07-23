import { Graphics } from "../entity/graphics";


export interface GraphicsRepository {
    GetDailyRatingsByDriverAndDate(kit_id: string): Promise<Graphics | null>;
    GetTravelsByDriverDistance(kit_id: string, date: string): Promise<Graphics | null>;
    durationTravelsbyDay(kit_id: string, date: string): Promise<Graphics | null>; 
    travelsbyweek(kit_id: string): Promise<Graphics | null>;
    travelsbyquadrant(kit_id: string): Promise<Graphics | null>; 
    activityTime(kit_id: string): Promise<Graphics | null>; 

    GetEvaluationByDriverId(driver_id: string): Promise<Graphics | null>;
}