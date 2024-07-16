import { Request, Response } from "express";
import { UpdateDriver } from "../../application/useCase/update.driver";
import { cloudinary } from "../../../cloudinary/cloudinary.config";

export class UpdateDriverController {
    constructor (readonly updateDriver: UpdateDriver) {}

    async run(req: Request, res: Response) {
        const id = String(req.params.id);
        const { name, last_name } = req.body;

        const image = req.file;

       
        let imagedata = '';

        if (image) {
            const uploadResponse = await cloudinary.v2.uploader.upload(image.path, {
                folder: 'taxitracker'
              });
            imagedata =  uploadResponse.secure_url;   
        }

    
        try {
            const updateDriver = await this.updateDriver.run(id, name, last_name, imagedata );

            if (updateDriver) {
                res.status(200).send({
                    status: 'success',
                    message: 'Driver update successfully',
                    data: updateDriver
                });
            } else {
                return res.status(400).send({
                    status: 'error',
                    message: 'an error ocurred while updating driver'
                })
            }

        } catch(error) {
            res.status(500).send({
                status: 'error',
                message: 'an error ocurred while updating driver',
                data: error
            })
        }
    }
}