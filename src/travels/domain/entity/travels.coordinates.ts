export class TravelCoordinates {
    constructor ( 
        readonly travel_id: number,
        readonly driver_id: string,
        readonly date: Date,
        readonly start_hour: Date,
        readonly end_hour: Date,
        readonly start_coordinates: string,
        readonly end_coordinates: string,
        readonly duration: Date,
        readonly latitudes: string,
        readonly longitudes: string
    ){}
}