import { Request, Response } from "express";
import { GetKitsByUserId} from "../../application/useCase/get.kits.userId";

export class GetKitsByUserIdController {
    constructor(readonly getKitsByUserIdUseCase: GetKitsByUserId){}

    async run (req: Request, res: Response) {
        const user_id = String(req.params.id);
        try {
            const kits = await this.getKitsByUserIdUseCase.run(user_id);

            if (kits?.length) {
                res.status(200).send({
                    status: 'Sucess',
                    message: 'Kits recovered by user id successfully',
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