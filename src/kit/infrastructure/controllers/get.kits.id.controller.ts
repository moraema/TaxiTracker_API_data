import { Request, Response } from "express";
import { GetKitsId } from "../../application/useCase/get.kits.id";


export class GetKitsIdController {
    constructor(readonly getKitsId: GetKitsId) {}

    async run(req: Request, res: Response) {
        const kit_id = String(req.params.id);

        try {

            const kit = await this.getKitsId.run(kit_id);

            if (kit) {
                res.status(200).send({
                    status: 'success',
                    message: 'kit recovered id kit successfully',
                    data: kit
                });
            } else {
                res.status(404).send({
                    status: 'error',
                    message: `There's no kit ` 
                })
            }
            
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: 'an error has ocurred',
                data: error
            })
        }
    }

}