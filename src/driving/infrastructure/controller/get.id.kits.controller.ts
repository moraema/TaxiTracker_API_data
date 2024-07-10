import { Request, Response } from "express";
import { GetDrivingByDriverId } from "../../application/useCase/get.id.driver";

export class GetDrivingByKitsIdController  {
    constructor ( readonly getDrivingByKitsId: GetDrivingByDriverId ) {}

    async run(req: Request, res: Response) {
        const id = String(req.params.id);

        try {
            const kits = await this.getDrivingByKitsId.run(id);

            if (kits) {
                res.status(200).send({
                    status: 'Success',
                    message: 'found kits',
                    data: kits
                });
            } else {
                res.status(400).send({
                    status: 'error',
                    message: 'not found kits'
                });
            }
        } catch ( error ){
            res.status(500).send({
                status: 'error',
                message: 'an error has ocurred',
                data: error
            })
        }
    }
}