import { Request, Response } from "express";
import { GetTravelsByDriverId } from "../../application/useCase/get.id.travels";


export class GetTravelsByDriverIdController {
    constructor (readonly getTravelsByDriverId: GetTravelsByDriverId){}

    async run(req: Request, res: Response){
        const id = String(req.params.id);

        try {
            const travelsDriverId = await this.getTravelsByDriverId.run(id);

            if (travelsDriverId) {
                res.status(200).send({
                    status: 'success',
                    message: 'found travels coordinates',
                    data: travelsDriverId
                });
            } else {
                res.status(400).send({
                    status: 'error',
                    message: 'not found travels coordinates'
                });
            }
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'an error has ocurred',
                data: error
            });
        }
    }
}