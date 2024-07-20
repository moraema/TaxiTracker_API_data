import { Request, Response } from "express";
import { GetTravelsByDriverDistance } from "../../application/useCases/get.travels.driverId.distance";


export class GetTravelsByDriverDistanceController {
    constructor(readonly getTravelsByDriverIdDistance: GetTravelsByDriverDistance) {}

    async run(req: Request, res: Response) {
        const kit_id = String(req.params.kit_id);
        const date = String(req.params.date)

        try {

            const distanceDriverId = await this.getTravelsByDriverIdDistance.run(kit_id, date);

            if (distanceDriverId) {
                res.status(200).send({
                    status: 'success',
                    message: 'found travel distance by driver id',
                    data: distanceDriverId
                })
            } else {
                res.status(500).send({
                    status: 'error',
                    message: 'not found travel distance by driver id'
                });
            }
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'an error has ocurred',
                error: error
            })
        }
    }
}