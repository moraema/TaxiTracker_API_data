import { Request, Response } from "express";
import { GetStatsByDriverId } from "../../application/useCase/get.stats.driver";

export class GetStatsByDriveIdController {
    constructor(readonly getStatsByDriverId: GetStatsByDriverId){}

    async run (req: Request, res: Response) {
        const driver_id = String(req.params.driver_id);

        try {
            const stats = await this.getStatsByDriverId.run(driver_id);

            if (stats) {
               res.status(200).send({
                status: 'success',
                message: 'Driver Stats retrieved successfully',
                data: stats
               });
            } else
              res.status(404).send({
               status: "error",
                message: `There's no stats`,
             });
        } catch(error){
            res.status(204).send({
                status: 'error',
                message: 'an error has occurred',
                error: error
            })
        }
    }
}