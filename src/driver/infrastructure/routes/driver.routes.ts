import express from 'express';
import { 
    getDriverByKitIdController,
    addDriverController,
    deleteDriverController,
    updateDriverController
 } from '../dependencies';
import { upload } from '../../application/service/multer';
const driverRouter = express.Router();

driverRouter.get('/:id', getDriverByKitIdController.run.bind(getDriverByKitIdController));
driverRouter.post('/',  upload.single('image'), addDriverController.run.bind(addDriverController));
driverRouter.put('/:id', updateDriverController.run.bind(updateDriverController));
driverRouter.delete('/:id', deleteDriverController.run.bind(deleteDriverController));


export { driverRouter }
