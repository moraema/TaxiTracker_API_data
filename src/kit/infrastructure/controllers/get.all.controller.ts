import { Request, Response } from "express";
import { GetAllKits } from "../../application/useCase/get.all.kits";

export class GetAllKitsController {
    constructor(readonly getAllKitsUseCase: GetAllKits){}

    async run (req: Request, res: Response) {
        try {
            const kits = await this.getAllKitsUseCase.run();

            if (kits?.length) {
                res.status(200).send({
                    status: 'Sucess',
                    message: 'Kits retrieved successfully',
                    data: kits
                })
            } else
              res.status(404).send({
               status: "error",
                message: `There's no kits`,
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