export class Driving {
    constructor(
        readonly kit_id: string,
        readonly driver_id: string,
        readonly datetime: Date,
        readonly impact_force: number,
        readonly acceleration: number,
        readonly desacceleration: number,
        readonly vibrations: number,
        readonly travel_coordenate_latitude: string,
    ){}
}