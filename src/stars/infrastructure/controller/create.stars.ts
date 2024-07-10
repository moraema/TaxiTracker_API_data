import { Request, Response } from "express";
import { AddStars } from "../../application/useCases/add.stars";

export class AddStarsController {
    constructor (readonly addStars: AddStars) {}

    async run (req: Request, res: Response) {

        try {
            const stars = await req.body;
            const result = await this.addStars.run(stars);

            if (result) {
                res.status(200).send({
                    status: 'Success',
                    message: 'Stars added successfully',
                    data: result
                });
            } else {
                res.status(404).send({
                    status: 'error',
                    message: 'Faield to add stars'
                });
            }
        } catch ( error ) {
            res.status(500).send({
                status: 'error',
                data: error,
                message: 'an error has ocurred'
            })
        }
    }
}