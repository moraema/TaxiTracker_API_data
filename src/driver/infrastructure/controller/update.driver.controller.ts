import { Request, Response } from "express";
import { UpdateDriver } from "../../application/useCase/update.driver";

export class UpdateDriverController {
    constructor (readonly updateDriver: UpdateDriver) {}

    async run(req: Request, res: Response) {
        const id = String(req.params.id);
        const { name, last_name, unit_code } = req.body;

        if (typeof name !== 'string' || typeof last_name !== 'string' || typeof unit_code !== 'string') {
            return res.status(400).send({
                status: 'error',
                message: 'invalid input data'
            })
        };

        try {
            const updateDriver = await this.updateDriver.run(id, name, last_name, unit_code);

            if (updateDriver) {
                res.status(200).send({
                    status: 'Success',
                    message: 'Driver update successfully',
                    data: updateDriver
                });
            } else {
                return res.status(400).send({
                    status: 'error',
                    message: 'an error ocurred while updating driver'
                })
            }

        } catch(error) {
            res.status(500).send({
                status: 'error',
                message: 'an error ocurred while updating driver',
                data: error
            })
        }
    }
}