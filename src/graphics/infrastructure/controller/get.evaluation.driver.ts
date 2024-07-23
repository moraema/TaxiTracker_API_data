import { Request, Response } from "express";
import { GetEvaluationByDriverId } from "../../application/useCases/get.evaluation.driver";

export class GetEvaluationByDriverIdController {
    constructor(readonly getEvaluationByDriverId: GetEvaluationByDriverId) {}

    async run(req: Request, res: Response) {
        const driver_id = String(req.params.driver_id);

        try {

            const evaluationDriverId = await this.getEvaluationByDriverId.run(driver_id);

            if (evaluationDriverId) {
                res.status(200).send({
                    status: 'success',
                    message: 'found evaluation by driver id',
                    data: evaluationDriverId
                })
            } else {
                res.status(500).send({
                    status: 'error',
                    message: 'not found evaluation by driver id'
                });
            }
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'an error has ocurred',
                error: error
            })
        }
    }
}