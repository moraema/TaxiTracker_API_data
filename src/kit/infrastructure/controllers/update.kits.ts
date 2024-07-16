import { Request, Response } from "express";
import { UpdateKits } from "../../application/useCase/update.kits";


export class UpdateKitsController {
    constructor(readonly updateKitsController: UpdateKits) {}


    async run(req: Request, res: Response) {
        const kit_id = String(req.params.id);
        const { unit_code, name } = req.body;

        try {

            const updateKits = await this.updateKitsController.run(kit_id, unit_code, name);

            if (updateKits) {
                res.status(200).send({
                    status: 'success',
                    message: 'kits update successfully',
                    data: updateKits
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
                message: 'an error ocurred '
            })
        }
    }
}