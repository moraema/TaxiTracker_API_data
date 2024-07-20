import { Request, Response } from "express";
import { GetDailyRatingsByDriverAndDate } from "../../application/useCases/get.daily.ratings.driver.id";



export class GetDailyRatingsByDriverAndDateController {
    constructor ( readonly getDailyRatingsByDriverAndDate: GetDailyRatingsByDriverAndDate) {}


    async run(req: Request, res: Response) {
   
        const kit_id = String(req.params.kit_id);
        const date = String(req.params.date);

        try{
         
            const dailyRatingByDriver = await this.getDailyRatingsByDriverAndDate.run(kit_id, date);

        
            if (dailyRatingByDriver) {
                res.status(200).send({
                    status: 'success',
                    message: ' found get daily ratings by driver and date',
                    data: dailyRatingByDriver
                });
            } else {
                res.status(500).send({
                    status: 'error',
                    message: 'not found get daily ratings by driver and date'
                });
            }
        } catch ( error ) {
            res.status(500).send({
                status: 'error',
                message: 'an error has ocurred',
                error: error
            })
        }
    }
}