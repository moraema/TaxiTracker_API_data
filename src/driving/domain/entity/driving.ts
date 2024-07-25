export class Driving {
    constructor(
        readonly kit_id: string,
        readonly driver_id: string,
        readonly travel_id: number,
        readonly datetime: Date,
        readonly acceleration: number,
        readonly deceleration: number,
        readonly vibrations: number,
        readonly travel_coordinates: string,
        readonly inclination_angle: number,
        readonly angular_velocity: number,
        readonly g_force_x: number,
        readonly g_force_y: number,
    ){}
}