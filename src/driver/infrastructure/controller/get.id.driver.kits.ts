import { Request, Response } from "express";
import { GetDriverByKitId } from '../../application/useCase/get.driver.id.kits';

export class GetDriversByKitIdController {
    constructor(readonly getAllDriversUseCase: GetDriverByKitId){}

    async run (req: Request, res: Response) {
        const id = String(req.params.id);

        try {
            const drivers = await this.getAllDriversUseCase.run(id);

            if (drivers) {
               res.status(200).send({
                status: 'Success',
                message: 'Driver retrieved successfully',
                data: drivers
               });
            } else
              res.status(404).send({
               status: "error",
                message: `There's no drivers`,
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