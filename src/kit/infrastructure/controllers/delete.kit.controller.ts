import { Request, Response } from "express";
import { DeleteKits } from "../../application/useCase/delete.kits";

export class DeleteKitsController {
    constructor ( readonly deleteKits: DeleteKits) {}

    async run(req: Request, res: Response) {
        const id = String(req.params.id);
        try {
           const kitsId = await this.deleteKits.run(id);
           
           if (kitsId) {
               return res.status(200).send({
                status: 'success',
                message: 'Successfully removed kit',
                data: kitsId
               }) 
           } else {
            return res.status(400).send({
                status: 'error',
                message: 'kit not found'
               });
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