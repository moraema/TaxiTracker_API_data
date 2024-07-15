import { Request, Response } from "express";
import { GetTravelsByDriverDistance } from "../../application/useCases/get.travels.driverId.distance";


export class GetTravelsByDriverDistanceController {
    constructor(readonly getTravelsByDriverIdDistance: GetTravelsByDriverDistance) {}

    async run(req: Request, res: Response) {
        const driver_id = String(req.params.driver_id);

        try {

            const distanceDriverId = await this.getTravelsByDriverIdDistance.run(driver_id);

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