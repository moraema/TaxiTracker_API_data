import { Request, Response } from "express";
import { GetTravelsByWeek } from "../../application/useCases/get.travels.by.week";

export class GetTravelsByWeekController  {
    constructor(readonly getTravelsByWeek: GetTravelsByWeek) {}

    async run(req: Request, res: Response) {
        const kit_id = String(req.params.kit_id);

        try {
            const travelsByWeek = await this.getTravelsByWeek.run(kit_id);

            if (travelsByWeek) {
                res.status(200).send({
                    status: 'success',
                    message: 'trips found for weeks',
                    data: travelsByWeek
                });
            } else {
                res.status(500).send({
                    status: 'error',
                    message: 'trips not found for weeks'
                })
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