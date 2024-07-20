import { Request, Response } from "express";
import { GetDurationTravelsbyDay } from "../../application/useCases/duration.travels.day";



export class GetDurationTravelsByDayController {
    constructor( readonly durationTravelsByDay: GetDurationTravelsbyDay) {}


    async run(req: Request, res: Response) {
        const kit_id = String(req.params.kit_id);
        const date = String(req.params.date);

        try {

            const durationTravels = await this.durationTravelsByDay.run(kit_id, date);

            if (durationTravels) {
                res.status(200).send({
                    status: 'error',
                    message: 'found duration of trips per day',
                    data: durationTravels
                });
            } else {
                res.status(500).send({
                    status: 'error',
                    message: 'not found duration of trips per day'
                })
            }
            
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'an error has ocurred',
                data: error
            })
        }
    }
}