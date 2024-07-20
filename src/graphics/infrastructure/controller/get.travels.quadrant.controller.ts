import { Request, Response } from "express";
import { GetTravelsByQuadrant } from "../../application/useCases/get.travels.by.quadrant";


export class GetTravelsByQuadrantController {
    constructor ( readonly getTravelsByQuadrant: GetTravelsByQuadrant) {}

    async run(req: Request, res:Response) {
        const kit_id = String(req.params.kit_id);

        try {
            const travelsQuadrant = await this.getTravelsByQuadrant.run(kit_id);

            if (travelsQuadrant) {
                res.status(200).send({
                    status: 'sucess',
                    message: 'travels found for quadrant',
                    data: travelsQuadrant
                });
            } else {
                res.status(500).send({
                    status: 'error',
                    message: 'travels not found for quadrant'
                })
            }
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'an error has occurred',
                data: error
            })
        }
    }
}