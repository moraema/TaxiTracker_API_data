import { Request, Response } from "express";
import { GetAllDriverDataId } from "../../application/useCase/get.id.driver.travels";

export class GetAllDriverDataIdController {
    constructor (readonly getAllDriverDataId: GetAllDriverDataId) {}

    async run(req: Request, res: Response) {
        const id = String(req.params.id);

        try {
            const allDriverTravels = await this.getAllDriverDataId.run(id);

            if (allDriverTravels) {
                res.status(200).send({
                    status: 'success',
                    message: 'all driver details were found',
                    data: allDriverTravels
                });
            } else {
                res.status(400).send({
                    status: 'error',
                    message: 'not found driver details'
                });
            }
        } catch (error) {
            return res.status(500).send({
                status: 'error',
                message: 'an error has ocurred',
                data: error
            })
        }

    }
}