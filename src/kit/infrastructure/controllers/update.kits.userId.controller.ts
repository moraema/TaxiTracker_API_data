import { Request, Response } from "express";
import { UpdateKitsUserId } from "../../application/useCase/update.kits.userId";


export class UpdateKitsUserIdController {
    constructor(readonly updateKitsUserId: UpdateKitsUserId) {}

    async run(req: Request, res: Response) {
        const kit_id = String(req.params.kit_id);
        const { user_id } = req.body;

        try {

            const updateKitsUserId = await this.updateKitsUserId.run(kit_id, user_id);

            if (updateKitsUserId) {
                res.status(200).json({
                    status: 'success',
                    message: 'kits update successfully',
                    data: updateKitsUserId
                });
            } else {
                res.status(400).send({
                    status: 'error',
                    message: 'an error ocurred updating kits'
                })
            }
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'an error ocurred',
                data: error
            })
        }
    }
}