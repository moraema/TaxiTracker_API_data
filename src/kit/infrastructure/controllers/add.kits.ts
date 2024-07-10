import { Request, Response } from "express";
import { AddKits } from "../../application/useCase/add.kits";


export class AddKitsController {
     constructor(readonly addKits: AddKits) {}


     async run(req: Request, res: Response) {

        try {
            const kits = req.body;
            const result = await this.addKits.run(kits);

            if (result) {
                res.status(200).send({
                    status: 'success',
                    message: 'kits added successfully',
                    data: result
                })
            } else {
                res.status(500).send({
                    status: 'error',
                    message: 'faield to add kits'
                });
            }
            
        } catch (error) {
            res.status(500).send({
                status: 'error',
                data: error,
                message: 'an error has ocurres'
            })
        }
     }
}