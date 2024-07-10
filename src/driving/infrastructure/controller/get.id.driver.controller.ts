import { Request, Response } from "express";
import { GetDrivingByDriverId } from "../../application/useCase/get.id.driver";

export class GetDrivingByDriverIdController {
        constructor (readonly getdrivingByDriverId: GetDrivingByDriverId) {}

        async run(req: Request, res: Response){
            const id = String(req.params.id);

            try {
                const driving = await this.getdrivingByDriverId.run(id);

                if (driving) {
                    res.status(200).send({
                        status: 'Success',
                        message: 'Found driving',
                        data: driving
                    });
                } else {
                    res.status(400).send({
                        status: 'error',
                        message: 'not found driving'
                    });
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