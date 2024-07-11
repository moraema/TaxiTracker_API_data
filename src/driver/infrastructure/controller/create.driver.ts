import { Request, Response } from "express";
import { AddDriver } from "../../application/useCase/add.driver";
import { cloudinary } from "../../../cloudinary/cloudinary.config";

export class AddDriverController {
    constructor(private readonly addDriver: AddDriver) {}

    async run(req: Request, res: Response) {
        try {
           
            const file = req.file;
          

            if (!file) {
                throw new Error('No file was uploaded.');
            }

          
            const uploadResponse = await cloudinary.v2.uploader.upload(file.path);

           
            const driverData = {
               ...req.body, 
              image: uploadResponse.secure_url 
            };

            
            const result = await this.addDriver.run(driverData);

           
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
        } catch (error) {
            console.error('Error adding driver:', error);
            res.status(500).send({
                status: 'Error',
                message: 'An error has occurred',
                error: error 
            });
        }
    }
}
