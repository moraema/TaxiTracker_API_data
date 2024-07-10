import { Request, Response } from "express";
import { AddDriver } from "../../application/useCase/add.driver";

export class AddDriverController {
    constructor(readonly addDriver: AddDriver){}

    async run(req: Request, res: Response)  {

        try {
           const driver = await req.body;
           const result = await this.addDriver.run(driver);
           
           if (result) {
              res.status(200).send({
                status: 'Success',
                message: 'Driver added successfully',
                data: result
             });
           } else {
              res.status(404).send({
                status: 'error',
                message: 'Failed to add driver'
              });
           }
        } catch ( error ) {
        res.status(500).send({
            status: 'Error',
            data:  error ,
            message: 'an error has occurred'
        })
        }
    } 
}