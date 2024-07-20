import { Request, Response } from "express";
import { GetActivityTime } from "../../application/useCases/get.activity.time";

export class GetActivityTimeController {
    constructor ( readonly getActivityTime: GetActivityTime) {}

    async run(req: Request, res: Response) {
        const kit_id = String(req.params.kit_id);

        try {
            const activityTime = await this.getActivityTime.run(kit_id);

            if (activityTime) {
                res.status(200).send({
                    status: 'success',
                    message: 'activity time found',
                    data: activityTime
                });
            } else {
                res.status(500).send({
                    status: 'error',
                    message: 'activity time not found'
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