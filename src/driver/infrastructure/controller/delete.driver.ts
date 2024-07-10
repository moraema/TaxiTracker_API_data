import { Request, Response } from "express";
import { DeleteDriver } from "../../application/useCase/delete.driver";


export class DeleteDriverController {
    constructor(readonly deleteDriver: DeleteDriver) {}

    async run(req: Request, res: Response) {
        const id = String(req.params.id);

        try {
            const driverId = await this.deleteDriver.run(id);

            if (driverId) {
                return res.status(200).send({
                    status: 'Success',
                    message: 'Successfully removed driver',
                    data: driverId
                });
            } else {
                return res.status(400).send({
                    status: 'error',
                    message: 'driver not found'
                });
            }
        } catch (error) {
            return res.status(500).send({
                status: 'error',
                message: 'an error ocurred',
                data: error
            })
        }
    }
}