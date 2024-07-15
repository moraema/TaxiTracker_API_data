import { Request, Response } from "express";
import { GetStarsById } from "../../application/useCases/get.id.stars";

export class GetStarsByIdController {
    constructor (readonly getStarsById: GetStarsById) {}

    async run(req: Request, res: Response) {
        const id = String(req.params.id);

        try {
            const stars = await this.getStarsById.run(id);

            if (stars) {
                res.status(200).send({
                    status: 'success',
                    message: 'found starts',
                    data: stars
                });
            } else {
                res.status(400).send({
                    status: 'error',
                    message: 'not found stars'
                });
            }
        } catch ( error ) {
            res.status(500).send({
                status: 'error',
                message: 'an error has ocurred',
                data: error
            })
        }
    }
}