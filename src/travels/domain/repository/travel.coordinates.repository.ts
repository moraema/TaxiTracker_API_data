import { TravelCoordinates } from "../entity/travels.coordinates";


export interface TravelCoordinatesRepository {
    getTravelDriverId(driver_id: string): Promise<TravelCoordinates | null> // coordenadas de los viajes 
    getAllDriverDataId(driver_id: string): Promise<TravelCoordinates | null>
}