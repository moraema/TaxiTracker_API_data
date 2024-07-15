import { Request, Response } from "express";
import { GetDriving } from "../../application/useCase/get.driving";

export class GetDrivingController {
    constructor (readonly getDriving:  GetDriving) {} 

    async run(req: Request, res: Response) {

        try {
            const driving = await this.getDriving.run();

            if (driving?.length) {
                res.status(200).send({
                    status: 'success',
                    message: 'Drivings retrieved successfully',
                    data: driving
                });
            } else {
                res.status(400).send({
                    status: 'error',
                    message: `There's no driving`
                })
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