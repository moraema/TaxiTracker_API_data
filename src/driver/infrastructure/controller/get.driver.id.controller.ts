import { Request, Response } from "express";
import { GetDriversId } from "../../application/useCase/get.driver.id";


export class GetDriverIdController {
    constructor(readonly getDriverId: GetDriversId) {}

    async run(req: Request, res: Response) {
        const driver_id = String(req.params.id);

        try {
            const driverId = await this.getDriverId.run(driver_id);

            if (driverId) {
                res.status(200).send({
                    status: 'success',
                    message: 'driver retrieved successfully',
                    data: driverId
                });
            } else {
                res.status(400).send({
                    status: 'error',
                    message: `There's no driver`
                })
            }
        } catch (error) {
            res.status(500).send({
                status: error,
                message: 'an error has ocurred',
                data: error
            })
        }
    }
}