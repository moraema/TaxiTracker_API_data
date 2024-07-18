import express from 'express';
import { 
    getDriverByKitIdController,
    addDriverController,
    deleteDriverController,
    updateDriverController,
    getDriverIdController
 } from '../dependencies';
import { upload } from '../../application/service/multer';
const driverRouter = express.Router();

driverRouter.get('/kit/:id', getDriverByKitIdController.run.bind(getDriverByKitIdController));
driverRouter.get('/:driver_id', getDriverIdController.run.bind(getDriverIdController));
driverRouter.post('/',  upload.single('image'), addDriverController.run.bind(addDriverController));
driverRouter.patch('/:id', upload.single('image'), updateDriverController.run.bind(updateDriverController));
driverRouter.delete('/:id', deleteDriverController.run.bind(deleteDriverController));


export { driverRouter }
